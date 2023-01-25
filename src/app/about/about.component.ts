import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
//Interpolation
export class AboutComponent {
  appName = ' Carl D. Gegante ';
  appEmail = 'cdgegante@gmail.com';
  myColor = 'red';
  MyOtherColor = 'Violet';
}
