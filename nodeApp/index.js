// Framework de express
const express = require('express')
// Variables de entorno
require('dot-env')
const path = require('path')
// Rutas

const app = express()

// configuracion para las vistas
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

// Rutas para mostrar las vistas
const views = require('./routes/view')(app)

// Rutas para el bakend

app.listen(3000)
console.log('Hi, im listening on port: 3000')
