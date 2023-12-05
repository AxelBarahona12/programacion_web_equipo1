const Producto = require("../models/Producto");

exports.crearProducto = async (req, res) =>{
    try {
        producto = new Producto(req.body);
        await producto.save();
        res.send(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerProductos = async(req,res)=>{

    try {
        const productos = await Producto.find();
        res.json(productos)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarProducto = async(req,res)=>{

    try {
        const { articulos, direccion, fechaCompra, estado, fechaEntrega} = req.body;
        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({msg: "no existe el producto"})
        }

        producto.articulos = articulos;
        producto.direccion = direccion;
        producto.fechaCompra = fechaCompra;
        producto.estado = estado;
        producto.fechaEntrega = fechaEntrega;

        producto = await Producto.findOneAndUpdate({ _id: req.params.id},producto,{ new: true})
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProducto = async(req,res)=>{

    try {
       let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({msg: "no existe el producto"})
        }

       res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarProducto = async(req,res)=>{

    try {
       let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({msg: "no existe el producto"})
        }
        await Producto.findOneAndRemove({ _id: req.params.id})
        res.json({msg:'producto eliminado con exito'});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}