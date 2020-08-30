import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registro = [];
  empleado: any;
  nombre: string;
  salario: number;
  salarioAFP: number;
  salarioISSS: number;
  salarioRENTA: number;
  salarioFINAL: number;
  ISSS: number;
  RENTA: number;
  AFP: number;
  contador: number;
  //enviar = false;
  constructor() { }
  ngOnInit() {
    this.salario = 0;
    this.nombre = '';
    this.contador = 0;
  }
  ingresar() {

    this.salarioAFP = this.salario*0.073;
    this.salarioRENTA = this.salario*0.11;
    this.salarioISSS = this.salario*0.051;

    this.salarioFINAL = this.salario - this.salarioAFP - this.salarioRENTA - this.salarioISSS;

    this.empleado = { "nombre": this.nombre, "salario": this.salario, "salarioAFP": this.salarioAFP, "renta": this.salarioRENTA, "isss": this.salarioISSS, "final": this.salarioFINAL };
    this.registro.push(this.empleado);
    this.contador++;
    //this.enviar = true;
  }
  
}
