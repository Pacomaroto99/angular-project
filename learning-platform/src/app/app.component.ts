import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sideNavOpened: boolean = false;

  toggleSideNav() {
    this.sideNavOpened = !this.sideNavOpened;
  }
}
