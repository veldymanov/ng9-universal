import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private htmlTitle: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.htmlTitle.setTitle('Angular Universal: HomeComponent');
    this.meta.addTag({name: 'description', content: 'HomeComponent content'});
  }

}
