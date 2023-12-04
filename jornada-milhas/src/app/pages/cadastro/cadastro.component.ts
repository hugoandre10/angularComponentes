import { Component, OnInit } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS, MatDateFormats, DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { Router } from '@angular/router';
import * as _moment from 'moment';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { PessoaUsuaria } from 'src/app/core/types/types';

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

  constructor(private formularioService: FormularioService,
    private cadastroService: CadastroService,
    private router: Router) {

  }

  cadastrar() {
    const formCadastro = this.formularioService.getCadastro()
    console.log(formCadastro)
    if ( formCadastro?.valid ) {
      const novoCadastro = formCadastro.getRawValue() as PessoaUsuaria;
      this.cadastroService.cadastrar(novoCadastro).subscribe({
        next: (value) => {
          console.log('Cadastro realizado com sucesso', formCadastro)
          this.router.navigate(['/login'])
        },
        error: (err) => {
          console.log('Cadastro não realizado', err);
        }
      })
    }
  }

}
