//el general de todos los archivos.

const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const productosController = require('./controllers/productosController')
const productosRouter = require('./routes/productos')

app.get('/', productosController.listado)

app.use('/productos', productosRouter)

app.listen(3000, function() {
    console.log("El servidor esta corriendo en el puerto 3000");
    console.log("http://localhost:3000")
})