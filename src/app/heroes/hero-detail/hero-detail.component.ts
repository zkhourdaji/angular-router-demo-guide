import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, ActivatedRouteSnapshot } from '@angular/router';
// import { switchMap } from 'rxjs/operators';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Observable } from 'rxjs';


@Component({
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {

  private hero$: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) { }

  ngOnInit() {
    /**
     * @see https://angular.io/guide/router#observable-parammap-and-component-reuse
     */
    // this.hero$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.service.getHero(params.get('id')))
    // );

    const id = +this.route.snapshot.paramMap.get('id');
    this.hero$ = this.service.getHero(id);
  }

  gotoHeroes(hero: Hero) {
    let heroId = hero ? hero.id : null;
    // the hero object here is an optional parameter of the route
    // it will look like: /heroes;id=3
    this.router.navigate(['/heroes', { id: heroId }]);

  }
}
