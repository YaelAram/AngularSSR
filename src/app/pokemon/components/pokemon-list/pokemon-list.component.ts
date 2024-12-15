import { Component, input } from '@angular/core';

import type { PokemonBasic } from '../../interfaces/pokemon';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

@Component({
  selector: 'pokemon-list',
  imports: [PokemonCardComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
})
export class PokemonListComponent {
  pokemon = input.required<PokemonBasic[]>();
}
