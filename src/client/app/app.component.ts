import {Component} from '@angular/core';

/**
 * This class represents the main application component.
 */
@Component({

  selector: 'an-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  constructor() { }
  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  
}
