import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ConversorComponent } from './components/conversor/conversor.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { EstadisticaComponent } from './components/estadistica/estadistica.component';
import { TraductorComponent } from './components/traductor/traductor.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'conversor', component: ConversorComponent },
  { path: 'horoscopo', component: HoroscopoComponent },
  { path: 'estadisticas-covid19', component: EstadisticaComponent },
  { path: 'traductor', component: TraductorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
