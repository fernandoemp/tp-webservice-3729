import { Injectable } from '@angular/core';
import { Texto } from '../models/texto';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TraductorService {
  idiomas: Array<any>;

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {

    this.idiomas = [ { codigo: 'es' , idioma: 'Español'},
    { codigo: 'en' , idioma: 'Ingles'},
    { codigo: 'fr' , idioma: 'Francés'},
    { codigo: 'de' , idioma: 'Alemán'}
    ];
   }

  public getTranslation(texto: Texto): Observable<any>{
    console.log('texto:' + texto);
    // petición por get a esa url de un api rest
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'systran-systran-platform-for-language-processing-v1.p.rapidapi.com',
        'x-rapidapi-key': '2c9cd29fc6msh3ba6f1ff811e6e5p1cdb60jsn151f0ed72ec0'
      })
    };
    // tslint:disable-next-line: max-line-length
    return this._http.get('https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate?source=' + texto.source + '&target=' + texto.target + '&input=' + texto.input, httpOptions);
  }

  getIdiomas(){
    return this.idiomas;
  }
}
