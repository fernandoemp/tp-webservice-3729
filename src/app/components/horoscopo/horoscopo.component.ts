import { Component, OnInit } from '@angular/core';
import { HoroscopoService } from 'src/app/services/horoscopo.service';
import { SignoZodiaco } from 'src/app/models/signo-zodiaco';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {
  signos: Array<any>;
  constructor(private horoscopoService: HoroscopoService) {
    this.signos = new Array<any>();
    this.obtenerHoroscopos();
  }

  ngOnInit(): void {
  }
  obtenerHoroscopos(){
    // tslint:disable-next-line: prefer-const
    let listaSignos = this.horoscopoService.getNombreSignos();
    listaSignos.forEach(element => {
      // tslint:disable-next-line: prefer-const
      let signo = new SignoZodiaco();
      signo.nameSigno = element.signo;
      signo.image = element.imagen;
      this.signos.push(signo);
    });

    this.signos.forEach(element => {
      this.horoscopoService.getHoroscopo(element).subscribe(
        (result) => {
          Object.assign(element, result);
        },
        error => { alert('Error en la petición'); }
      );
    });

    this.signos.forEach(element => {
      console.log(element);
    });
  }
}
