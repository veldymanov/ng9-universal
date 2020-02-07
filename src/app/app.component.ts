import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng9-universal';

  constructor(
    private router: Router
  ) { }

  public navigateToLazy(): void {
    this.router.navigate(['/lazy-loaded-first']);
  }
}
