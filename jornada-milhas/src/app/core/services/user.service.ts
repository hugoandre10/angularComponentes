import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { PessoaUsuaria } from '../types/types';
import { BehaviorSubject } from 'rxjs';
import  jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private userSubject = new BehaviorSubject<PessoaUsuaria | null>(null)

  constructor ( private tokenService: TokenService,
                private router:Router) {
    if (this.tokenService.possuiToken()) {
      this.decodificarJWT();
    }
}

//npm install @types/node e e carregar o node no "types" do tsconfig.app.json:    sobre o jwt_decode = require('jwt-decode'); , npm i jwt-decode


  decodificarJWT() {
   const token = this.tokenService.retornarToken();
   const user = jwt_decode(token) as PessoaUsuaria;
   console.log(user)
   this.userSubject.next(user);
  }

  retornarUser () {
    return this.userSubject.asObservable();
  }

  salvarToken (token: string) {
    this.tokenService.salvarToken(token);
    this.decodificarJWT();
  }

  logout () {
    this.tokenService.excluirToken();
    this.userSubject.next(null);
    this.router.navigate(['/login'])
  }

  estaLogado () {
    return this.tokenService.possuiToken();
  }

}
