import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';

  sourceList: Satellite[];

  // constructor () {
  //   this.sourceList = [
  //     new Satellite("SiriusXM", "Communication", true, "LOW", "2009-03-21"),
  //     new Satellite("Cat Scanner", "Imaging", true, "LOW", "2012-01-05"), 
  //     new Satellite("Weber Grill", "Space Debris", false, "HIGH", "1996-03-25"), 
  //     new Satellite("GPS 938", "Positioning", true, "HIGH", "2001-11-01"), 
  //     new Satellite("ISS", "Space Station", true, "LOW", "1998-11-20"),
  //   ]
  //  }

  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {

          //console.log(data);
          let fetchedSatellites = data.satellites;
          // TODO: loop over satellites
          for(let i = 0; i < fetchedSatellites.length ; i++) {
            // console.log(fetchedSatellites[0]);
            // TODO: create a Satellite object using new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
            let newSatellite = new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
            // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite);
            // console.log(Satellite);
            this.sourceList.push(newSatellite);
          }
 
       }.bind(this));
    }.bind(this));
 }

}
