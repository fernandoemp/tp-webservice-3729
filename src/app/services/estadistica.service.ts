import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../models/pais';

@Injectable({
  providedIn: 'root'
})
export class EstadisticaService {
  paises: Array<any>;
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {
    this.paises = [ { country: 'world', image: './../../../assets/estadistica/mundo.png' },
    { country: 'argentina', image: './../../../assets/estadistica/argentina.png' },
    { country: 'brazil', image: './../../../assets/estadistica/brasil.png' },
    { country: 'russia', image: './../../../assets/estadistica/rusia.png' },
    { country: 'spain', image: './../../../assets/estadistica/españa.png' },
    { country: 'usa', image: './../../../assets/estadistica/estadosunidos.png' },
    { country: 'italy', image: './../../../assets/estadistica/italia.png' },
    { country: 'france', image: './../../../assets/estadistica/francia.png' },
    { country: 'germany', image: './../../../assets/estadistica/alemania.png' },
    { country: 'turkey', image: './../../../assets/estadistica/turquia.png' }
    ];
  }

  public getListaPaises(): Array<any>{
    return this.paises;
  }
/*
  public getEstadistica(pais: Pais): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
        'x-rapidapi-key': '2c9cd29fc6msh3ba6f1ff811e6e5p1cdb60jsn151f0ed72ec0'
      })
    };

    // tslint:disable-next-line: max-line-length
    return this._http.get('https://covid-19-data.p.rapidapi.com/country?format=json&name=' + pais.country, httpOptions);
  }
*/
public getEstadistica(pais: Pais): Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
      'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com',
      'x-rapidapi-key': '2c9cd29fc6msh3ba6f1ff811e6e5p1cdb60jsn151f0ed72ec0'
    })
  };

  // tslint:disable-next-line: max-line-length
  return this._http.get('https://covid-19-tracking.p.rapidapi.com/v1/' + pais.country, httpOptions);
}

}
