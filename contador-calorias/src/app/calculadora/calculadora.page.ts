import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage {
  peso!: number;
  altura!: number;
  edad!: number;
  genero!: string;
  nivelActividad!: string;
  caloriasResultantes!: number;

  constructor(private router: Router) {}

  calcularCalorias() {
    // Lógica para calcular las calorías
    // Utiliza las propiedades peso, altura, edad, genero y nivelActividad

    // Asigna el resultado a la propiedad caloriasResultantes
  }

  goToRegistroComida() {
    this.router.navigate(['/registro-comida']);
  }
}
