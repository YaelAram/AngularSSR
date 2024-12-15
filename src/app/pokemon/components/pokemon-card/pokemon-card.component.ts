import { TitleCasePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PokemonBasic } from '../../interfaces/pokemon';

@Component({
  selector: 'pokemon-card',
  imports: [TitleCasePipe, RouterLink],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css',
})
export class PokemonCardComponent {
  pokemon = input.required<PokemonBasic>();
  spriteUrl = computed(
    () =>
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
        this.pokemon().id
      }.png`
  );
}
