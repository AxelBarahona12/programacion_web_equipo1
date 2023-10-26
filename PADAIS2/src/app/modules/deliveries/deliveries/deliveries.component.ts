import { Component, OnInit } from '@angular/core';
import { DeliveriesService } from './deliveries.service';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.scss']
})
export class DeliveriesComponent implements OnInit {
  listaEntregas: any[] = [];

  constructor(private deliveriesService: DeliveriesService) {}

  ngOnInit() {
    this.listaEntregas = this.deliveriesService.getListaEntregas();
  }
}