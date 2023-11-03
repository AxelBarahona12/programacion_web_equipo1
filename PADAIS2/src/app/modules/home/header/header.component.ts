import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{
  viewCart: Boolean=false;
  constructor(){}

  ngOnInit(): void {
  }

  onToogleCart()
  {
    this.viewCart = !this.viewCart
  }

}
