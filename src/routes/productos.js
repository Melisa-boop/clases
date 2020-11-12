
//donde se graban todas las rutas

const express = require('express');
const router = express.Router();

const productosController = require('../controllers/productosController')


router.get('/detalle/productos', productosController.listado)

router.get('/detalle/:idProducto/:categoria?', productosController.porId)

module.exports = router;