import { Component, OnInit } from '@angular/core';
import { ConversorService } from 'src/app/services/conversor.service';
import { element } from 'protractor';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Conversion } from 'src/app/models/conversion';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  conversion1: string;
  conversion2: string;
  conversion3: string;
  conversion4: string;
  conversion5: string;

  conversiones: Array<string>;
  conversiones1: Array<string>;
  conversiones2: Array<string>;
  conversiones3: Array<string>;
  conversiones4: Array<string>;
  conversiones5: Array<string>;

  monedas: Array<any>;
  conversion: Conversion;

  constructor(private conversorService: ConversorService) {
    this.conversion1 = 'USD';
    this.conversion2 = 'EUR';
    this.conversion3 = 'JPY';
    this.conversion4 = 'GBP';
    this.conversion5 = 'CAD';
    this.conversion = new Conversion();
    this.conversion.from = 'USD';
    this.conversion.to = 'EUR';
    this.monedas = conversorService.getMonedas();
    this.obtenerConversionesTabla();
  }

  ngOnInit(): void {
  }

  obtenerConversionFormulario() {
    if (this.conversion.from === this.conversion.to){
      this.conversion.result = this.conversion.value;
    }
    else{
      this.conversorService.getConversiones(this.conversion.from).subscribe(
        (result) => {
          const rates = result.rates;
          console.log(rates[this.conversion.to]);
          const valor = parseFloat(rates[this.conversion.to]) * parseFloat(this.conversion.value);
          this.conversion.result = valor.toString();

        },
        error => { alert('Error en la petición'); }
      );
    }
  }

obtenerConversionesTabla(){
    this.obtenerConversiones1();
    this.obtenerConversiones2();
    this.obtenerConversiones3();
    this.obtenerConversiones4();
    this.obtenerConversiones5();
  }

obtenerConversiones1() {
    this.conversiones1 = new Array<string>();
    this.conversorService.getConversiones(this.conversion1).subscribe(
      (result) => {
        const rates = result.rates;
        // tslint:disable-next-line: no-shadowed-variable
        this.monedas.forEach(element => {
          if (this.conversion1 === 'EUR' && element.codigoMoneda === 'EUR') {
            this.conversiones1.push(('1'));
          }
          else {
            this.conversiones1.push((rates[element.codigoMoneda]));
          }
        });
      },
      error => { alert('Error en la petición'); }
    );
  }
obtenerConversiones2() {
    this.conversiones2 = new Array<string>();
    this.conversorService.getConversiones(this.conversion2).subscribe(
      (result) => {
        const rates = result.rates;
        // tslint:disable-next-line: no-shadowed-variable
        this.monedas.forEach(element => {
          if (this.conversion2 === 'EUR' && element.codigoMoneda === 'EUR') {
            this.conversiones2.push(('1'));
          }
          else {
            this.conversiones2.push((rates[element.codigoMoneda]));
          }
        });
      },
      error => { alert('Error en la petición'); }
    );
  }
obtenerConversiones3() {
    this.conversiones3 = new Array<string>();
    this.conversorService.getConversiones(this.conversion3).subscribe(
      (result) => {
        const rates = result.rates;
        // tslint:disable-next-line: no-shadowed-variable
        this.monedas.forEach(element => {
          if (this.conversion3 === 'EUR' && element.codigoMoneda === 'EUR') {
            this.conversiones3.push(('1'));
          }
          else {
            this.conversiones3.push((rates[element.codigoMoneda]));
          }
        });
      },
      error => { alert('Error en la petición'); }
    );
  }
obtenerConversiones4() {
    this.conversiones4 = new Array<string>();
    this.conversorService.getConversiones(this.conversion4).subscribe(
      (result) => {
        const rates = result.rates;
        // tslint:disable-next-line: no-shadowed-variable
        this.monedas.forEach(element => {
          if (this.conversion4 === 'EUR' && element.codigoMoneda === 'EUR') {
            this.conversiones4.push(('1'));
          }
          else {
            this.conversiones4.push((rates[element.codigoMoneda]));
          }
        });
      },
      error => { alert('Error en la petición'); }
    );
  }
obtenerConversiones5() {
    this.conversiones5 = new Array<string>();
    this.conversorService.getConversiones(this.conversion5).subscribe(
      (result) => {
        const rates = result.rates;
        // tslint:disable-next-line: no-shadowed-variable
        this.monedas.forEach(element => {
          if (this.conversion5 === 'EUR' && element.codigoMoneda === 'EUR') {
            this.conversiones5.push(('1'));
          }
          else {
            this.conversiones5.push((rates[element.codigoMoneda]));
          }
        });
      },
      error => { alert('Error en la petición'); }
    );
  }
}
