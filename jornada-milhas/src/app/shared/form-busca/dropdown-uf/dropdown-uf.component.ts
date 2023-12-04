import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {  Observable, map, startWith } from 'rxjs';
import { UnidadeFederativaServiceService } from 'src/app/core/services/unidade-federativa-service.service';
import { UnidadeFederativa } from 'src/app/core/types/types';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit {
  @Input() label: string = ``;
  @Input() iconePrefixo: string = ``;
  @Input() control!: FormControl;

  unidadesFederativas:UnidadeFederativa[] = [];

  filteredOptions$?: Observable<UnidadeFederativa[]>;

  constructor (private unidadeFederativaService: UnidadeFederativaServiceService) {

  }


  ngOnInit(): void {
    this.unidadeFederativaService.listar()
      .subscribe(
        dados => {
          this.unidadesFederativas = dados;
        }
      )

      this.filteredOptions$ = this.control.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      )

  }

  displayEstado(estado: UnidadeFederativa): string {
    return estado && estado.nome ? estado.nome : '';
  }

  private _filter(value: string | UnidadeFederativa): UnidadeFederativa[] {
    const filterValue = typeof value === 'string' ? value : value.nome;

    return this.unidadesFederativas.filter(option => option.nome.toLowerCase().includes(filterValue?.toLocaleLowerCase()))

  }
}
