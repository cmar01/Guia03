import { Component, OnInit } from '@angular/core';
//Agregar las siguientes modulos
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-gasolina',
  templateUrl: './gasolina.component.html',
  styleUrls: ['./gasolina.component.css']
})
export class GasolinaComponent implements OnInit {

  unidades;
  opcionSeleccionado: string;
  valorcm: number;
  valorconversion: number;
  constructor() { }

  ngOnInit() {
    //inicializar las variables
    this.unidades = ["Especial", "Regular", "Diesel"];
    this.opcionSeleccionado = "Selecciona";
    this.valorcm = 0;
    this.valorconversion = 0;
  }
  //funcion que realiza los calculos
  capturar() {
    switch (this.opcionSeleccionado) {
      case 'Especial':
        this.valorconversion = this.valorcm * 4.25;
        break;
      case 'Regular':
        this.valorconversion = this.valorcm * 4.05;
        break;
      case 'Diesel':
        this.valorconversion = this.valorcm * 3.96;
        break;
    }
  }
}
export class AppComponent {
}
