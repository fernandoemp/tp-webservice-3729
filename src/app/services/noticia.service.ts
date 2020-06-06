import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  categoriaSeleccionada = 'lala';
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {

  }

  public getAllNews(categoria: string): Observable<any>{

    // petición por get a esa url de un api rest
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host':  'livescore6.p.rapidapi.com',
        'x-rapidapi-key': '5a891b3bfemshbe636412126e564p1450a6jsne66d35508b88'
      })
    };
    return this._http.get('https://livescore6.p.rapidapi.com/news/list?category=' + categoria, httpOptions);
  }
}
