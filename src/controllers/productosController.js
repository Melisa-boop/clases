//todas las funciones

const fs = require('fs')
const path = require('path')

let productos = fs.readFileSync(path.join(__dirname, '../data/productos.json'), 'utf8');
let arrayDeProductos = JSON.parse(productos)

let productosController = {
    index: function(req, res) {
        res.send("Bienvenido a mi página")
    },
    listado: function(req, res) {
        res.send(productos)
    },
    porId: function(req, res) {
        for(let i = 0; i < arrayDeProductos.length; i++) {
            if(req.params.idProducto == arrayDeProductos[i].id) {
                if(req.params.categoria) {
                    return res.send(arrayDeProductos[i].category)
                } else {
                    return res.send(arrayDeProductos[i])
                }
            }
        }
        return res.send("Este producto no existe")
    }
}

module.exports = productosController