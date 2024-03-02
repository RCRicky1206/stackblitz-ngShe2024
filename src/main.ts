import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { FormsModule } from '@angular/forms';
import { Gasto } from './gasto';
import { NgFor, NgIf } from '@angular/common';

@Component({
  imports: [FormsModule, NgFor, NgIf],
  selector: 'app-root',
  standalone: true,
  templateUrl: 'main.html',
})
export class App {
  nombreGasto = '';
  cantidadGasto = 0;
  presupuesto = 0;
  saldo = 0;
  gastos: Gasto[] = [];
  saldoInicialIngresado = false;

  agregarGasto(): void {
    const gasto = new Gasto(this.nombreGasto, this.cantidadGasto);
    this.gastos.push(gasto);
    console.log(this.gastos);
    this.saldo -= gasto.cantidad;
    this.nombreGasto = '';
    this.cantidadGasto = 0;
  }

  ingresarSaldoInicial(): void {
    this.saldo = this.presupuesto;
    this.saldoInicialIngresado = true;
  }

  eliminarGasto(indiceGasto: number, cantidadGasto: number): void {
    this.gastos.splice(indiceGasto, 1);
    this.saldo += cantidadGasto;
  }

  reiniciarSaldo(): void {
    this.saldoInicialIngresado = false;
    this.presupuesto = 0;
    this.gastos = [];
  }
}

bootstrapApplication(App);
