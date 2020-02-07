import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-eager-loaded-feature-one',
  templateUrl: './eager-loaded-feature-one.component.html',
  styleUrls: ['./eager-loaded-feature-one.component.scss']
})
export class EagerLoadedFeatureOneComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Angular Universal: EagerLoadedFeatureOneComponent');
    this.meta.addTag({name: 'description', content: 'EagerLoadedFeatureOneComponent content'});
  }

}
