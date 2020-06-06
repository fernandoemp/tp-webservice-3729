import { Component, OnInit } from '@angular/core';
import { EstadisticaService } from 'src/app/services/estadistica.service';
import { Pais } from 'src/app/models/pais';
import { EmailService } from 'src/app/services/email.service';
import { Email } from 'src/app/models/email';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {
  estadisticas: Array<Pais>;
  paises: Array<any>;
  paisSeleccionado: string;
  opcionCasosConfirmados: boolean;
  opcionCurados: boolean;
  opcionFallecidos: boolean;
  email: Email;

  constructor(private estadisticaService: EstadisticaService, private emailService: EmailService) {
    this.estadisticas = Array<Pais>();
    this.paises = estadisticaService.getListaPaises();
    this.email = new Email();
    this.opcionCasosConfirmados = false;
    this.opcionCurados = false;
    this.opcionFallecidos = false;
    this.obtenerEstadisticas();


  }

  ngOnInit(): void {
  }

  obtenerEstadisticas() {
    this.paises.forEach(element => {
      // tslint:disable-next-line: prefer-const
      let pais = new Pais();
      Object.assign(pais, element);

      this.estadisticaService.getEstadistica(pais).subscribe(
        (result) => {
          pais.totalCases = result['Total Cases_text'];
          pais.totalDeaths = result['Total Deaths_text'];
          pais.totalRecovered = result['Total Recovered_text'];
          pais.newCases = result['New Cases_text'];
          pais.newDeaths = result['New Deaths_text'];
          this.estadisticas.push(pais);
        }
      );


    });

    this.estadisticas.forEach(element => {
      console.log(element);
    });
  }
  enviarCorreo(){

    this.estadisticas.forEach(element => {
      if (element.country === this.paisSeleccionado){
          this.email.value = 'País: ' + element.country.toUpperCase() + '\n';
          if (this.opcionCasosConfirmados === true){
            this.email.value += 'Casos Confirmados: ' + element.totalCases + '\n';
          }
          if (this.opcionCurados === true){
            this.email.value += 'Total Curados: ' + element.totalRecovered + '\n';
          }
          if (this.opcionFallecidos === true){
            this.email.value += 'Total Fallecidos: ' + element.totalDeaths + '\n';
          }
          this.emailService.sendEmail(this.email);
          this.resetForm();
      }
    });

  }

  resetForm(){
    this.opcionCasosConfirmados = false;
    this.opcionCurados = false;
    this.opcionFallecidos = false;
    this.paisSeleccionado = null;
    this.email = new Email();
  }
}
