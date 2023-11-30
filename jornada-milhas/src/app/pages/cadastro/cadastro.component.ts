import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS, MatDateFormats, DateAdapter, MatNativeDateModule } from '@angular/material/core';
import * as _moment from 'moment';
import { FormularioService } from 'src/app/core/services/formulario.service';

const moment = _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'DD/MM/YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MM YYYY',
  },
};


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    MatNativeDateModule,
  ],
})
export class CadastroComponent {

  perfilComponent = false;

  constructor ( private formularioService: FormularioService ) {

  }


  cadastrar ( ) {
    const formCadastro = this.formularioService.getCadastro()
    console.log('Cadastro realizado com sucesso', formCadastro)
  }


}
