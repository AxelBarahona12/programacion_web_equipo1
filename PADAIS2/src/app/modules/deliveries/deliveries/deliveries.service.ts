import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeliveriesService {
  private listaEntregas = [
    {
      id_paquete: '0000003',
      estado: 'Pago Pendiente',
      direccionEntrega: 'Calle 26 #1',
      fechaCompra: '27-10-2023',
      fechaEntrega: '02-11-2023'
    },
    {
      id_paquete: '0000002',
      estado: 'En Tránsito',
      direccionEntrega: 'Calle Principal #123',
      fechaCompra: '21-10-2023',
      fechaEntrega: '31-10-2023'
    },
    {
      id_paquete: '0000001',
      estado: 'Entregado',
      direccionEntrega: 'Avenida Secundaria #456',
      fechaCompra: '04-10-2023',
      fechaEntrega: '24-10-2023'
    },
    // Agrega más entregas según sea necesario
  ];

  getListaEntregas() {
    return this.listaEntregas;
  }
}
