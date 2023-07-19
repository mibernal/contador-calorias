import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComidasPage } from './lista-comidas.page';

const routes: Routes = [
  {
    path: '',
    component: ListaComidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaComidasPageRoutingModule {}
