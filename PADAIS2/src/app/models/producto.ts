export class Producto{
    _id?: number;
    articulos: string;
    direccion: string;
    fechaCompra: Date;
    estado: number;
    fechaEntrega: Date;

    constructor(articulos: string, direccion: string, fechaCompra:Date, estado: number, fechaEntrega:Date){
        this.articulos = articulos;
        this.direccion = direccion;
        this.fechaCompra = fechaCompra;
        this.estado = estado;
        this.fechaEntrega = fechaEntrega;
    }
}