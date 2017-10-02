import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = ""
  title = 'app';
  featureSelected: string 

  onNavigate(feature: string) {
    this.featureSelected = feature
  }

}

