import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng9-universal';

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  public navigateToLazy(): void {
    this.router.navigate(['/lazy-loaded-first']);
  }
}
