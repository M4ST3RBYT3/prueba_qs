// Framework de express
const express = require('express')
// Variables de entorno
require('dot-env')
const path = require('path')
const bodyParser = require('body-parser')

// Rutas

const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// configuracion para las vistas
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

// Rutas para mostrar las vistas
const views = require('./routes/view')(app)
const pais = require('./routes/pais')(app)
const moneda = require('./routes/moneda')(app)
// Rutas para el bakend

app.listen(process.env.PORT)
console.log(`Hi, im listening on port: ${process.env.PORT} ${process.env.USERNAME}`)
