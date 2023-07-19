import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroComidaPageRoutingModule } from './registro-comida-routing.module';

import { RegistroComidaPage } from './registro-comida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroComidaPageRoutingModule
  ],
  declarations: [RegistroComidaPage]
})
export class RegistroComidaPageModule {}
