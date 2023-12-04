import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Promocao } from 'src/app/core/types/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  promocoes : Promocao[] = [];

  constructor ( private servicoPromocao:PromocaoService,
                private router: Router) {

  }


  ngOnInit(): void {
    this.servicoPromocao.listar()
      .subscribe(
        response => {
          response as Promocao[];
          this.promocoes = response;
          console.log(this.promocoes);
        }
      );
  }

  navegarParaBusca($event: any) {
    this.router.navigate(['busca'])
  }


}
