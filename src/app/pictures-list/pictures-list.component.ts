import { Component, OnInit } from '@angular/core';
import { Picture } from './picture';

@Component({
  selector: 'app-pictures-list',
  templateUrl: './pictures-list.component.html',
  styleUrls: ['./pictures-list.component.scss']
})
export class PicturesListComponent implements OnInit {

  pictures: Picture[] = [
    {
      miniatura : "assets/img/logano.jpg",
      nombre : "Joey Logano",
      resolucion : "1450 x 500",
      precio : 200,
      stock: 350,
      promocion : true,
      cantidad : 0,
    },
    {
      miniatura : "assets/img/rally.jpg",
      nombre : "Ford fiesta rally",
      resolucion : "960 x 612",
      precio : 320,
      stock : 200,
      promocion : false,
      cantidad : 0,
    },
    {
      miniatura : "assets/img/fordferrari.jpg",
      nombre : "Ford vs Ferrari",
      resolucion : "960 x 383",
      precio : 500,
      stock : 0,
      promocion : false,
      cantidad : 0,
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

  maximoAlcanzado(m: String){
    alert(m);
  }

}
