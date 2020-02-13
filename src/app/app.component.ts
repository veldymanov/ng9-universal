import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng9-universal';

  constructor(
    private htmlTitle: Title,
    private meta: Meta,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.htmlTitle.setTitle('Angular Universal: AppComponent');
    this.meta.addTag({name: 'description', content: 'AppComponent content'});

    this.meta.addTags([
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:site', content: '@AngularUniv'},
      {name: 'twitter:title', content: 'this.course.description AppComponent'},
      {name: 'twitter:description', content: 'this.course.description AppComponent'},
      {name: 'twitter:text:description', content: 'this.course.description AppComponent'},
      {name: 'twitter:image', content: 'https://avatars3.githubusercontent.com/u/16628445?v=3&s=200'}
    ]);
  }

  public navigateToLazy(): void {
    this.router.navigate(['/lazy-loaded-first']);
  }
}
