import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  goToCalculadora() {
    this.router.navigate(['/calculadora']);
  }

  goToListaComidas() {
    this.router.navigate(['/lista-comidas']);
  }
}
