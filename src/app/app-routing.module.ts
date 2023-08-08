import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ItemComponent } from './pages/item/item.component';
import { AboutComponent } from './pages/about/about.component';


const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'item', component: ItemComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( app_routes, { useHash: true } )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { 

}
