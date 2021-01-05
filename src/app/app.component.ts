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
  displayList: Satellite[];

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
    this.displayList = []
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
          // make a copy of the sourceList to be shown to the user
      this.displayList = this.sourceList.slice(0);
 
       }.bind(this));
    }.bind(this));
    
 }
 
 search(searchTerm: string): void {
  let matchingSatellites: Satellite[] = [];
  searchTerm = searchTerm.toLowerCase();
  for(let i=0; i < this.sourceList.length; i++) {
     let name = this.sourceList[i].name.toLowerCase();
     if (name.indexOf(searchTerm) >= 0) {
        matchingSatellites.push(this.sourceList[i]);
     }
  }
  // assign this.displayList to be the array of matching satellites
  // this will cause Angular to re-make the table, but now only containing matches
  this.displayList = matchingSatellites;
}

}
