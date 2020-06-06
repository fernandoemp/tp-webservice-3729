import { Component, OnInit } from '@angular/core';
import { Texto } from 'src/app/models/texto';
import { TraductorService } from 'src/app/services/traductor.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css']
})
export class TraductorComponent implements OnInit {

  texto: Texto;
  idiomas: Array<any>;

  constructor(private traductorService: TraductorService) {
    this.texto = new Texto();
    this.texto.input = '';
    this.texto.source = 'en';
    this.texto.target = 'es';
    this.idiomas = this.traductorService.getIdiomas();
  }

  ngOnInit(): void {
  }

  traducir() {
   if (this.texto.input !== ''){
    if (this.texto.source === this.texto.target) {
      this.texto.output = this.texto.input;
    }
    else {
      this.traductorService.getTranslation(this.texto).subscribe(
        (result) => {
          // tslint:disable-next-line: no-string-literal
          const outputs = result['outputs'];
          this.texto.output = outputs['0'].output;
        },
        error => { alert('Error en la petición'); }
      );
    }
   }
   else{
    swal.fire('Debe ingresar un texto para traducir', '', 'error');
  }

  }

  limpiarCampos(){
    this.texto.input = '';
    this.texto.output = '';
  }

  invertirIdiomas(){
    const source = this.texto.source;
    this.texto.source = this.texto.target;
    this.texto.target = source;
  }
}
