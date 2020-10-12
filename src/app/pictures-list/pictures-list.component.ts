import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pictures-list',
  templateUrl: './pictures-list.component.html',
  styleUrls: ['./pictures-list.component.scss']
})
export class PicturesListComponent implements OnInit {

  nascar = {
    "miniatura" : "assets/img/logano.jpg",
    "nombre" : "Joey Logano",
    "resolucion" : "1450 x 500",
    "precio" : "200"
  }

  rally = {
    "miniatura" : "assets/img/rally.jpg",
    "nombre" : "Ford fiesta rally",
    "resolucion" : "960 x 612",
    "precio" : "320"
  }

  fordferrari = {
    "miniatura" : "assets/img/fordferrari.jpg",
    "nombre" : "Ford vs Ferrari",
    "resolucion" : "960 x 383",
    "precio" : "500"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
