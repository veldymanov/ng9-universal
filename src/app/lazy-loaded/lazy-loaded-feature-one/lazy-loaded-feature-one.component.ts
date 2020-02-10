import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-lazy-loaded-feature-one',
  templateUrl: './lazy-loaded-feature-one.component.html',
  styleUrls: ['./lazy-loaded-feature-one.component.scss']
})
export class LazyLoadedFeatureOneComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Angular Universal: LazyLoadedFeatureOneComponent');
    this.meta.addTag({name: 'description', content: 'LazyLoadedFeatureOneComponent content'});
  }

}
