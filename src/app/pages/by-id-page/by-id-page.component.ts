import {
  Component,
  effect,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';

import { TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { LoaderComponent } from '../../pokemon/components/loader/loader.component';
import { Pokemon } from '../../pokemon/interfaces/pokemon';
import { PokemonService } from '../../pokemon/services/pokemon.service';
import { SeoService } from '../../shared/services/seo.service';

const toNumber = (value: string | undefined): number => {
  const id = Number(value);
  if (!value || id < 0 || isNaN(id)) return 0;
  return id;
};

@Component({
  selector: 'app-by-id-page',
  imports: [TitleCasePipe, LoaderComponent],
  templateUrl: './by-id-page.component.html',
  styleUrl: './by-id-page.component.css',
  host: {
    class: 'center',
  },
})
export default class ByIdPageComponent implements OnInit {
  #seo = inject(SeoService);
  #pokemonService = inject(PokemonService);
  #router = inject(Router);

  id = input.required({ transform: toNumber });
  pokemon = signal<Pokemon | undefined>(undefined);

  updateTitlePage = effect(() => {
    const title = this.pokemon()?.name ?? 'Find by ID';
    const name = `${title.at(0)?.toUpperCase()}${title.slice(1)}`;
    const imgUrl =
      this.pokemon()?.sprites.other?.['official-artwork']?.front_default ?? '';

    this.#seo.updateSeo(name, 'EMPTY', [
      { name: 'description', content: `${name} pokemon page` },
      { name: 'og:title', content: `${name}` },
      { name: 'og:image', content: imgUrl },
    ]);
  });

  ngOnInit(): void {
    this.#pokemonService.loadPokemon(this.id()).subscribe((pokemon) => {
      if (!pokemon) this.#router.navigateByUrl('/pokemon/0');
      else this.pokemon.set(pokemon);
    });
  }
}
