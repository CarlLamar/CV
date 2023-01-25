import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css'],
})
export class ReferencesComponent implements OnInit {
  constructor() {}
  //Property Binding
  clientName: string = 'Input name here';
  clientEmail: string = 'Input email here';
  appliedWDClass = 'blue';
  notappliedWDClass = true;
  submitButton($event: any) {
    console.log('button is clicked!');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
  clearButton($event: any) {
    console.log('button is clicked!');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
  ngOnInit() {}
}
