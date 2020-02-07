import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-loaded-feature-one',
  templateUrl: './lazy-loaded-feature-one.component.html',
  styleUrls: ['./lazy-loaded-feature-one.component.scss']
})
export class LazyLoadedFeatureOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
