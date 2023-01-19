const soap = require('soap')
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));
const url = 'https://www.banguat.gob.gt/variables/ws/TipoCambio.asmx?WSDL'
var args = {}

const showMain = (request, response) => {
    response.render('page/main')

}

const showCoins = async (request, response) => {
    var mcr, mgt
    // webservice cr
    const options = {
        method: 'GET'
    }
    const respuesta =  await fetch('https://api.hacienda.go.cr/indicadores/tc/dolar', options)
    mcr = await respuesta.json()
    

    // webservice soap gt
    var client = await soap.createClientAsync(url);
    var results = await client.TipoCambioDiaAsync(args);
    mgt = results[0].TipoCambioDiaResult.CambioDolar.VarDolar[0]
    response.render('page/monedas', {cr: mcr, gt: mgt})
}

module.exports = {
    showMain,
    showCoins
}