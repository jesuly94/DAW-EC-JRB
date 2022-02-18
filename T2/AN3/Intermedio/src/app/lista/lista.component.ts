import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public animes: Array<any>

  constructor() { 
    this.animes = [
      {
        tittle: "One Piece",
        image:  "../assets/onepiece.png"
      },{
        tittle: "Fairy Tail",
        image:  "../assets/fairi.jpg"
      },{
        tittle: "Dragon Ball Z",
        image:  "../assets/dragonball.jpg"
      },{
        tittle: "Naruto",
        image:  "../assets/naruto.jpg"
      },
    ]
  }

  ngOnInit(): void {
  }

  salir(){}
}
