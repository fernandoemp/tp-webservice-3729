import { Injectable, ɵɵresolveBody } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conversion } from '../models/conversion';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  monedas: Array<any>;

   // tslint:disable-next-line: variable-name
   constructor(private _http: HttpClient) {
     //
    this.monedas = [ { codigoMoneda: 'USD' , imagen: './../../../assets/conversor/usd.png' },
    { codigoMoneda: 'EUR' , imagen: './../../../assets/conversor/eur.png' },
    { codigoMoneda: 'JPY' , imagen: './../../../assets/conversor/jpy.png' },
    { codigoMoneda: 'GBP' , imagen: './../../../assets/conversor/gbp.png' },
    { codigoMoneda: 'CAD' , imagen: './../../../assets/conversor/cad.png' },
    { codigoMoneda: 'AUD' , imagen: './../../../assets/conversor/aud.png' },
    { codigoMoneda: 'CHF' , imagen: './../../../assets/conversor/chf.png' },
    { codigoMoneda: 'HKD' , imagen: './../../../assets/conversor/hkd.png' },
    { codigoMoneda: 'SEK' , imagen: './../../../assets/conversor/sek.png' },
    { codigoMoneda: 'NZD' , imagen: './../../../assets/conversor/nzd.png' }
  ];
  }

  public getConversion(conversion: Conversion): Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host':  'community-neutrino-currency-conversion.p.rapidapi.com',
        'x-rapidapi-key': '2c9cd29fc6msh3ba6f1ff811e6e5p1cdb60jsn151f0ed72ec0',
        'content-type': 'application/x-www-form-urlencoded'
      })
    };

    // tslint:disable-next-line: max-line-length
    return this._http.post('https://community-neutrino-currency-conversion.p.rapidapi.com/convert?from-type=' + conversion.from + '&to-type=' + conversion.to + '&from-value=' + conversion.value, ɵɵresolveBody , httpOptions);
  }
  /*
  public getConversion2(conversion: Conversion): Observable<any>{


    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host':  'currency-converter5.p.rapidapi.com',
        'x-rapidapi-key': '2c9cd29fc6msh3ba6f1ff811e6e5p1cdb60jsn151f0ed72ec0'
      })
    };

    // tslint:disable-next-line: max-line-length
    return this._http.get('https://currency-converter5.p.rapidapi.com/currency/convert?format=json' + '&from=' + conversion.from + '&to=' + conversion.to + '&amount=' + conversion.value, httpOptions);
  }
*/
  getMonedas(){
   return this.monedas;
  }

  public getConversiones(from: string): Observable<any>{


    return this._http.get('https://api.ratesapi.io/api/latest?' + 'base=' + from);
  }

}

