import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages: { title: string; url: string; icon: string }[];

  constructor() {
    this.appPages = [
      { title: 'Home', url: '/home', icon: 'home' },
      { title: 'Calculadora', url: '/calculadora', icon: 'calculator' },
      { title: 'Lista de Comidas', url: '/lista-comidas', icon: 'list' },
      // Agrega más enlaces según sea necesario
    ];
  }
}
