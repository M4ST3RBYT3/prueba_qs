const ctrl = require('../controller/views')

module.exports = (app) => {
    app.get('/', ctrl.showMain)
    app.get('/tasa/cambio', ctrl.showCoins)
}