import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Email } from '../models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {
  }

  public sendEmail(email: Email) {

    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'rapidprod-sendgrid-v1.p.rapidapi.com',
        'x-rapidapi-key': '2c9cd29fc6msh3ba6f1ff811e6e5p1cdb60jsn151f0ed72ec0',
        'content-type': 'application/json'
      })
    };

    const body = {
      personalizations: [
        {
          to: [
            {
              email: email.to
            }
          ],
          subject: 'Estadisticas Covid 19 - PSW2020'
        }
      ],
      from: {
        email: 'fernandoemanuelmp@gmail.com'
      },
      content: [
        {
          type: 'text/plain',
          value: email.value
        }
      ]
    };

    // tslint:disable-next-line: max-line-length
    return this._http.post('https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send', JSON.stringify(body), httpOptions).subscribe(
      (result) => {

      });
  }

}
