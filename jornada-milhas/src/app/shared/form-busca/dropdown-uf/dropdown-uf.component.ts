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

  myControl = new FormControl('');

  unidadesFederativas:UnidadeFederativa[] = [];

  filteredOptions: Observable<string[]> = this.myControl.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value || '')),
  );

  constructor (private unidadeFederativaService: UnidadeFederativaServiceService) {

  }


  ngOnInit(): void {
    this.unidadeFederativaService.listar()
      .subscribe(
        dados => {
          this.unidadesFederativas = dados;
        }
      )

  }



  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.unidadesFederativas.filter(option => option.nome.toLowerCase().includes(filterValue))
    .map(option => option.nome);
  }

}
