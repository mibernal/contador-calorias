import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-comidas',
  templateUrl: './lista-comidas.page.html',
  styleUrls: ['./lista-comidas.page.scss'],
})
export class ListaComidasPage {
  comidas: { nombre: string; calorias: number }[] = [];

  constructor(private router: Router) {}

  goToCalculadora() {
    this.router.navigate(['/calculadora']);
  }

  goToRegistroComida() {
    this.router.navigate(['/registro-comida']);
  }
}
