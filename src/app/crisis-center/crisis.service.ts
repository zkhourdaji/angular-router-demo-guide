import { Injectable } from '@angular/core';
import { Crisis } from './crisis';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CRISES } from './mock-crisis';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {

  getCrisies(): Observable<Crisis[]> {
    return of(CRISES);
  }

  getCrisis(id: number | string): Observable<Crisis> {
    return this.getCrisies().pipe(
      map((crisies: Crisis[]) => crisies.find((crisis: Crisis) => crisis.id === +id))
      );

  }
}
