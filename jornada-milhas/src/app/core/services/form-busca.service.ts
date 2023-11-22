import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {

  formBusca: FormGroup;

  constructor(private dialog: MatDialog) {

    this.formBusca = new FormGroup({
      somenteIda : new FormControl(false),
      origem: new FormControl(null),
      destino: new FormControl(null),
      tipo: new FormControl("Econômica"),
      adultos: new FormControl(1),
      criancas: new FormControl(0),
      bebes: new FormControl(0),
    });

   }

   operacoesBotao (tipo:string , operacao: string): void {
    let valorAdulto = 0;
    let valorCrianca = 0;
    let valorBebe = 0;
    switch (true) {
      case tipo === 'adultos' && operacao === 'decrementar':
        valorAdulto = this.formBusca.get('adultos')?.value;
        valorAdulto -= 1;
        if (valorAdulto > 0) {
          this.formBusca.get('adultos')?.patchValue(valorAdulto);
        }
        break;

      case tipo === 'adultos' && operacao === 'incrementar':
        valorAdulto = this.formBusca.get('adultos')?.value;
        valorAdulto += 1;
        if (valorAdulto > 0) {
          this.formBusca.get('adultos')?.patchValue(valorAdulto);
        }
        break;

      case 'criancas' && 'decrementar':
        valorCrianca = this.formBusca.get('criancas')?.value;
        valorCrianca -= 1;
        if (valorCrianca > 0) {
          this.formBusca.get('criancas')?.patchValue(valorCrianca);
        }
        break;

      case 'criancas' && 'incrementar':
        valorCrianca = this.formBusca.get('criancas')?.value;
        valorCrianca += 1;
        if (valorCrianca > 0) {
          this.formBusca.get('criancas')?.patchValue(valorCrianca);
        }
        break;

      case 'bebes' && 'decrementar':
        valorBebe = this.formBusca.get('bebes')?.value;
        valorBebe -= 1;
        if (valorBebe > 0) {
          this.formBusca.get('bebes')?.patchValue(valorBebe);
        }
        break;

      case 'bebes' && 'incrementar':
        valorBebe = this.formBusca.get('bebes')?.value;
        valorBebe += 1;
        if (valorBebe > 0) {
          this.formBusca.get('bebes')?.patchValue(valorBebe);
        }
        break;
    }

   }

   getDescricaoPassageiros (): string {
    let descricao = ''

    const adultos = this.formBusca.get('adultos')?.value;

    if (adultos && adultos > 0) {
      descricao += ''
    }

    return descricao
   }

   obterControle (nome:string): FormControl {
    const control = this.formBusca.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
      return control as FormControl;
  }

  alterarTipo (evento: MatChipSelectionChange, tipo: string) {
    if (evento.selected) {
        this.formBusca.get('tipo')?.patchValue({
        tipo
      })
    }
  }

  openDialog () {
    this.dialog.open(ModalComponent, {
      width: '50%'
    });
  }
}
