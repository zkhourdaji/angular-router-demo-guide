import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  getHero(id: number | string): Observable<Hero> {
    return this.getHeroes().pipe(
      map((heroes: Hero[]) => heroes.find((hero: Hero) => hero.id === +id))
      );

  }
}
