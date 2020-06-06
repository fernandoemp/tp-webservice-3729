import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { Noticia } from './../../models/noticia';
import { NoticiaService } from './../../services/noticia.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})

export class HomeComponent implements OnInit  {
  noticia: Noticia;
  noticias: Array<Noticia>;
  categoria: string;
  subscription: any;


  constructor(private noticiaService: NoticiaService, public rutaActiva: ActivatedRoute) {
    this.getNoticias();
  }

  ngOnInit() {

  }


getNoticias() {

  this.noticiaService.getAllNews('soccer').subscribe(
    (result) => {
      this.noticias = new Array<Noticia>();
      // tslint:disable-next-line: no-string-literal
      result['arts'].forEach(element => {
        this.noticia = new Noticia();
        Object.assign(this.noticia, element);
        this.noticias.push(this.noticia);
      });
    },
    error => { alert('Error en la petición'); }
  );

}

}

