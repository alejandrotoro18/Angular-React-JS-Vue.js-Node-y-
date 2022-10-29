import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {

  public titulo:String;
  public comentario:String;
  public year: number;

  constructor() { 
    this.titulo="Hola Mundo soy mi componente"
    this.comentario="salida soy mi comentario"
    this.year=2022

    console.log("Componente mi-componente cargado");
  }

  ngOnInit() {
  }

}