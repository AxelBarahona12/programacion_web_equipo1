const mongoose = require('mongoose');

const ProductosSchema = mongoose.Schema({
    articulos: {
        type: String,
        require: true
    },
    direccion: {
        type: String,
        require: true
    },
    fechaCompra: {
        type: String,
        require: true
    },
    estado: {
        type: String,
        require: true
    },
    fechaEntrega: {
        type: String,
        require: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Producto', ProductosSchema);