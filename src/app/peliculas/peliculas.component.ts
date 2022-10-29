import { Component, OnInit,DoCheck,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit,DoCheck,OnDestroy {
  public titulo : string;
  public mostrarPeliculas:boolean;

  constructor() { 
    console.log("constructor pelis lanzado");
    this.titulo="component peli";
    
  }

  ngOnInit() {
    console.log("componente pelis lanzado");
  }
ngDoCheck(){
  console.log("Do Check lanzado");

}
cambiarTitulo(){
  this.titulo="El titulo ha sido cambiado";
}
ngOnDestroy()
{
  console.log("Destroy");
   }
}