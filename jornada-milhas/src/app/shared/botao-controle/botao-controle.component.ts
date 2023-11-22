import { Component, Input } from '@angular/core';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-botao-controle',
  templateUrl: './botao-controle.component.html',
  styleUrls: ['./botao-controle.component.scss']
})
export class BotaoControleComponent {
  @Input() operacao: 'incrementar' | 'decrementar' = 'decrementar';
  @Input() src: string = '';
  @Input() alt: string = '';

}
