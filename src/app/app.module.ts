import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxDataTableModule } from 'angular-9-datatable';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PublicidadComponent } from './components/publicidad/publicidad.component';
import { ConversorComponent } from './components/conversor/conversor.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { EstadisticaComponent } from './components/estadistica/estadistica.component';
import { TraductorComponent } from './components/traductor/traductor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    PublicidadComponent,
    ConversorComponent,
    HoroscopoComponent,
    EstadisticaComponent,
    TraductorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDataTableModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
