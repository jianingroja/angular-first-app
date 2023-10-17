import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hello world from {{ name }}!</h1>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'jianing';
}
