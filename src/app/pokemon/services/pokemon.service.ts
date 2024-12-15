import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { Pokemon, PokemonResp } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  #http = inject(HttpClient);

  #baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  #LIMIT = 20;

  loadPage(page: number) {
    const params = new HttpParams({
      fromObject: {
        limit: this.#LIMIT,
        offset: Math.max(0, page) * this.#LIMIT,
      },
    });

    return this.#http.get<PokemonResp>(this.#baseUrl, { params }).pipe(
      map((resp) => {
        return resp.results.map((pokemon) => ({
          name: pokemon.name,
          id: pokemon.url.split('/').at(-2) ?? '',
        }));
      }),
      catchError(() => of([]))
    );
  }

  loadPokemon(id: number) {
    return this.#http
      .get<Pokemon>(`${this.#baseUrl}/${id}`)
      .pipe(catchError(() => of(undefined)));
  }
}
