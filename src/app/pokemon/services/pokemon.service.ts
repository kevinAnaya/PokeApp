import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl: string = environment.baseUrl

  constructor( private http: HttpClient) { }

  getPokemon( termino: string){
    let url: string = `${this.baseUrl}/${termino}`

    return this.http.get(url)
  }
}
