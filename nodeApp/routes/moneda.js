const ctrl = require('../controller/moneda')

module.exports = (app) => {
    app.get('/moneda/ver/pais/:id', ctrl.getByPais)
    app.post('/moneda/agregar/pais', ctrl.addMonedaPais)
    app.get('/moneda/eliminar/:id', ctrl.deleteMoneda)
    app.post('/moneda/actualizar/:id', ctrl.updateMoneda)
    app.get('/moneda/ver/:id', ctrl.getMoneda)
    app.post('/moneda/filtrar', ctrl.getMonedaInDates)
}