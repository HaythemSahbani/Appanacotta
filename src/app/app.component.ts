import { Component } from '@angular/core';

@Component({
 selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = 48.1351;
  lng: number = 11.5820;
  zoom: number = 16;
  label: string = 'C';
  infoText: string = `Hi, this is the content of the coffee info tooltip`;
}
