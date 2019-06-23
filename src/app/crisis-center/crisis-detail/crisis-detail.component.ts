import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, ActivatedRouteSnapshot } from '@angular/router';
// import { switchMap } from 'rxjs/operators';
import { CrisisService } from '../crisis.service';
import { Crisis } from '../crisis';
import { Observable } from 'rxjs';


@Component({
  templateUrl: './crisis-detail.component.html'
})
export class CrisisDetailComponent implements OnInit {

  private crisis$: Observable<Crisis>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
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
    this.crisis$ = this.service.getCrisis(id);
  }

  gotoCrisies(crisis: Crisis) {
    let crisisId = crisis ? crisis.id : null;
    // the hero object here is an optional parameter of the route
    // it will look like: /heroes;id=3
    this.router.navigate(['/crisis', { id: crisisId }]);

  }
}
