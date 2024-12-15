import {
  Component,
  computed,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';

import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { LoaderComponent } from '../../pokemon/components/loader/loader.component';
import { PokemonListComponent } from '../../pokemon/components/pokemon-list/pokemon-list.component';
import type { PokemonBasic } from '../../pokemon/interfaces/pokemon';
import { PokemonService } from '../../pokemon/services/pokemon.service';
import { SeoService } from '../../shared/services/seo.service';

const toNumber = (value: string | undefined): number => {
  const id = Number(value);
  if (!value || isNaN(id) || id > 20 || id < 0) return 0;
  return id;
};

@Component({
  selector: 'app-pokemon-page',
  imports: [PokemonListComponent, LoaderComponent],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css',
})
export default class PokemonPageComponent implements OnInit {
  #router = inject(Router);
  #seo = inject(SeoService);
  #pokemonService = inject(PokemonService);

  page = input.required({ transform: toNumber });
  pokemon = signal<PokemonBasic[]>([]);

  prevDisabled = computed(
    () => this.page() === 0 || this.pokemon().length === 0
  );
  nextDisabled = computed(
    () => this.page() === 20 || this.pokemon().length === 0
  );

  ngOnInit(): void {
    this.#seo.updateSeo(`Pokedex - Page ${this.page()}`, 'POKEMON');
    this.loadPage(this.page());
  }

  loadPage(page: number = 0) {
    this.pokemon.set([]);
    this.#pokemonService
      .loadPage(page)
      .pipe(tap(() => this.#router.navigateByUrl(`/pokemon/${page}`)))
      .subscribe((results) => this.pokemon.set(results));
  }

  updatePage(page: number) {
    if (page > 20 || page < 0) return;
    this.loadPage(page);
  }
}
