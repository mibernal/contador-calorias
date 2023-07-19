import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaComidasPageRoutingModule } from './lista-comidas-routing.module';

import { ListaComidasPage } from './lista-comidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaComidasPageRoutingModule
  ],
  declarations: [ListaComidasPage]
})
export class ListaComidasPageModule {}
