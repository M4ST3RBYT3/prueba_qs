const ctrl = require('../controller/pais')

module.exports = (app) => {
    app.get('/paises/ver', ctrl.getPaises)
}