import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PruebaComponent } from './prueba/prueba.component';

const routes: Routes = [
  {path:'prueba', component: PruebaComponent},
  {path:'agregar-articulo', component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
