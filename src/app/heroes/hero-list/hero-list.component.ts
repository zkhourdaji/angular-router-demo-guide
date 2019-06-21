import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import { Hero } from '../hero';

@Component({
  templateUrl: './hero-list.component.html',
  styleUrls: [
    './hero-list.component.css'
  ]
})
export class HeroListComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  selectedId: number;


  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.heroes$ = this.heroService.getHeroes();
    this.selectedId = +this.route.snapshot.paramMap.get('id');
    console.log(this.selectedId);
  }
}
