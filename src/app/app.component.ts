import { Component } from '@angular/core';
import { App } from 'realm-web';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-realm-web';
  app = new App({ id: 'anything-here' });
}
