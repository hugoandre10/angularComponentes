import { Component, Input } from '@angular/core';
import { Botoes } from 'src/app/core/types/types';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent {

primary = {
    titulo: 'Editar',
    styles: { backgroundColor: '#007bff' }
};

secondary = {
  titulo: 'Desabilitado',
  styles: { backgroundColor: '#6c757d' }
};

success = {
  titulo: 'Salvar',
  styles: { backgroundColor: '#28a745' },
};

danger = {
  titulo: 'Deletar',
  styles: { backgroundColor: '#dc3545' }
};




  @Input() btnConfig?:Botoes



}
