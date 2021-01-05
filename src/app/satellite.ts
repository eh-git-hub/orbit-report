export class Satellite {

    name: string;
    type: string;
    operational: boolean;
    orbitType: string; 
    launchDate: string;
    changeColor: boolean = null;

    constructor(name: string, type: string, operational: boolean, orbitType: string, launchDate: string) {
        this.name = name; 
        this.type = type; 
        this.operational = operational;
        this.orbitType = orbitType; 
        this.launchDate = launchDate; 
     }

     shouldShowWarning(){
         if(this.type = "Space Debris"){
            this.changeColor = true; 
         } else {
             this.changeColor = false;
         }
     }
}

