import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { PeliculasComponent } from './peliculas/peliculas.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,MiComponenteComponent,PeliculasComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
