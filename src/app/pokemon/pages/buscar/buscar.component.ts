import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent {

  termino: string = '';

  pokemon: any = {}

  constructor( private pokemonService: PokemonService) { }

  buscar(){
    this.pokemonService.getPokemon(this.termino)
        .subscribe( resp => {
          this.pokemon = resp
        })
  }

}
