import { Injectable, ɵɵresolveBody } from '@angular/core';
import { SignoZodiaco } from '../models/signo-zodiaco';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {


  signos: Array<any>;


  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {
    this.signos = [ {signo : 'aquarius', imagen : './../../../assets/horoscopo/acuario.png'},
    { signo: 'pisces', imagen: './../../../assets/horoscopo/piscis.png'},
    { signo: 'aries', imagen: './../../../assets/horoscopo/aries.png'},
    { signo: 'taurus', imagen: './../../../assets/horoscopo/tauro.png'},
    { signo: 'gemini', imagen: './../../../assets/horoscopo/geminis.png'},
    { signo: 'cancer', imagen: './../../../assets/horoscopo/cáncer.png'},
    { signo: 'leo', imagen: './../../../assets/horoscopo/leo.png'},
    { signo: 'virgo', imagen: './../../../assets/horoscopo/virgo.png'},
    { signo: 'libra', imagen: './../../../assets/horoscopo/libra.png'},
    { signo: 'scorpio', imagen: './../../../assets/horoscopo/escorpio.png'},
    { signo: 'sagittarius', imagen: './../../../assets/horoscopo/sagitario.jpg'},
    { signo: 'capricorn', imagen: './../../../assets/horoscopo/capricornio.png'}
  ];
  }

  public getHoroscopo(signo: SignoZodiaco): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host':  'sameer-kumar-aztro-v1.p.rapidapi.com',
        'x-rapidapi-key': '2c9cd29fc6msh3ba6f1ff811e6e5p1cdb60jsn151f0ed72ec0',
        'content-type': 'application/x-www-form-urlencoded'
      })
    };

    // tslint:disable-next-line: max-line-length
    return this._http.post('https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=' + signo.nameSigno + '&day=today', ɵɵresolveBody, httpOptions);
  }

  getNombreSignos(){
    return this.signos;
  }

}
