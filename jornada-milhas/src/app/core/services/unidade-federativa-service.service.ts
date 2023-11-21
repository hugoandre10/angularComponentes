import { Injectable, OnInit } from '@angular/core';
import { UnidadeFederativa } from '../types/types';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnidadeFederativaServiceService implements OnInit {

  apiUrl: string = environment.apiUrl;

  private cache$?: Observable<UnidadeFederativa[]>;

  constructor(private http:HttpClient  ) {

  }

  ngOnInit(): void {

  }

  listar() : Observable<UnidadeFederativa[]> {
    if (!this.cache$) {
      this.cache$ = this.requestEstados().pipe(
        shareReplay(1)
      );
    }

    return this.cache$;
  }

  private requestEstados(): Observable<UnidadeFederativa[]> {
    return this.http.get<UnidadeFederativa[]>(`${this.apiUrl}/estados`);
  }


}
