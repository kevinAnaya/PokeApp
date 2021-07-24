import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { 
    path: '',
    children: [
    { path: 'home', component: HomeComponent},
    { path: 'buscar', component: BuscarComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
