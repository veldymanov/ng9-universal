import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eager-loaded-feature-one',
  templateUrl: './eager-loaded-feature-one.component.html',
  styleUrls: ['./eager-loaded-feature-one.component.scss']
})
export class EagerLoadedFeatureOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
