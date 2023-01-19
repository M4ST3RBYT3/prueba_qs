const db = require('../db').connection
const model = require('../model/moneda')

const getByPais = (request, response) => {
    const id = request.params.id
    let consulta = 'SELECT idMoneda as id, CAST(fecha AS DATE) as fecha, venta, compra, pais_idPais FROM moneda WHERE pais_idPais = ?'
    db.query(consulta, [id], function (error, results, fields) {
        if (error) throw error;
        response.render('page/listaMonedas', {data: results, id: id})
      });
}

const addMonedaPais = (request, response) => {
    const {fecha, venta, compra, pais_idPais} = request.body
    const [day, month, year] = fecha.split('/')
    let nfecha = `${year}/${month}/${day}`
    let moneda = new model.Moneda(nfecha, venta, compra, pais_idPais)
    let consulta = 'INSERT INTO moneda SET ?'
    let prueba   = 'SELECT * FROM moneda WHERE pais_idPais = ? AND fecha = ?'

    db.beginTransaction(function(err) {
        if (err) { throw err; }
        db.query(prueba, [pais_idPais, nfecha], function (error, results, fields) {
          if (error) {
            return db.rollback(function() {
              throw error;
            });
          }
          if (results.length == 0 ) {
            db.query(consulta, moneda, function (err, result, field) {
                if (err){
                    throw err;
                }
                response.render('page/monedaAgregada', {data: moneda, idM: result.insertId})
              });
          } else {
              response.render('page/error', {mssg: 'La informacion fue registrada con anterioridad, no se alterio ningun registro'})
          }
        });
      });

  
}

const deleteMoneda = (request, response) => {
  const id = parseInt(request.params.id)
  let consulta = 'DELETE FROM moneda WHERE idMoneda = ?'
  db.query(consulta, [id], function (error, results, fields) {
    if (error) throw error;
    response.render('page/main', {mssg: 'Registro eliminado!'})
  });
}

const updateMoneda = (request, response) => {
  const id = parseInt(request.params.id)
  const {fecha, venta, compra, pais_idPais} = request.body

  let consulta = 'UPDATE moneda SET compra = ? , venta = ? where idMoneda = ?'
  db.query(consulta, [compra, venta, id], function (error, results, fields) {
    if (error) throw error;
    response.render('page/main', {mssg: 'Registro actualizado!'})
  });
}

const getMoneda = (request, response) => {
  const id = parseInt(request.params.id)
  let consulta = 'SELECT * FROM moneda WHERE idMoneda = ?'
  db.query(consulta, [id], function (error, results, fields) {
    if (error) throw error;
    response.render('page/ver', {data: results[0]})
  });
}

const getMonedaInDates = (request, response) => {
  const { fi, ff } = request.body
  let consulta = 'SELECT m.fecha, m.venta, m.compra, p.nombre FROM moneda m, pais p WHERE m.pais_idPais = p.idPais AND fecha BETWEEN ? AND ?'
  db.query(consulta, [fi, ff], function (error, results, fields) {
    if (error) throw error;
    response.render('page/listar', {data: results})
  });
}

module.exports = {
    getByPais,
    addMonedaPais,
    deleteMoneda,
    updateMoneda,
    getMoneda,
    getMonedaInDates
}