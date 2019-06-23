import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrisisService } from '../crisis.service';
import { Observable } from 'rxjs';
import { Crisis } from '../crisis';

@Component({
  templateUrl: './crisis-list.component.html',
  styleUrls: [
    './crisis-list.component.css'
  ]
})
export class CrisisListComponent implements OnInit {

  crisies$: Observable<Crisis[]>;
  selectedId: number;


  constructor(
    private route: ActivatedRoute,
    private crisesService: CrisisService
  ) { }

  ngOnInit() {
    this.crisies$ = this.crisesService.getCrisies();
    this.selectedId = +this.route.snapshot.paramMap.get('id');
  }
}
