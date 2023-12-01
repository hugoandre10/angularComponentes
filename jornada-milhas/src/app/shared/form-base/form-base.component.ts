import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { UnidadeFederativa } from 'src/app/core/types/types';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent implements OnInit {

  cadastroForm!: FormGroup;
  estadoControl = new FormControl<UnidadeFederativa | null>(null, Validators.required);
  @Input() perfilComponent!: boolean;
  @Output() acaoClique: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService
  ) { }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      nome: ['null', Validators.required],
      nascimento: ['09/09/1980', [Validators.required]],
      cpf: ['11277490655', [Validators.required]],
      cidade: ['teste', Validators.required],
      email: ['teste@teste.teste', [Validators.required, Validators.email]],
      senha: ['123456', [Validators.required, Validators.minLength(3)]],
      genero: ['outro'],
      telefone: ['8976545126', Validators.required],
      estado: this.estadoControl,
      confirmarEmail: ['teste@teste.teste', [Validators.required, Validators.email]],
      confirmarSenha: ['123456', [Validators.required, Validators.minLength(3)]],
      aceitarTermos: [true, [Validators.requiredTrue]]
    });

    this.formularioService.setCadastro(this.cadastroForm);
  }

  executarAcao ( ) {
    this.acaoClique.emit();
  }

}
