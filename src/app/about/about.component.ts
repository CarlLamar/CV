import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
//Property Binding
export class AboutComponent {
  appName = ' Carl D. Gegante ';
  appEmail = 'cdgegante@gmail.com';
}
