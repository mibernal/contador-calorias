import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroComidaPage } from './registro-comida.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroComidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroComidaPageRoutingModule {}
