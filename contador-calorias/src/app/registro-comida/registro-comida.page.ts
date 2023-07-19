import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-comida',
  templateUrl: './registro-comida.page.html',
  styleUrls: ['./registro-comida.page.scss'],
})
export class RegistroComidaPage {
  comida: string = '';
  calorias: number = 0;

  constructor(private router: Router) {}

  registrarComida() {
    // Lógica para registrar la comida
    // Utiliza las propiedades comida y calorias
  }

  goToCalculadora() {
    this.router.navigate(['/calculadora']);
  }

  goToListaComidas() {
    this.router.navigate(['/lista-comidas']);
  }
}
