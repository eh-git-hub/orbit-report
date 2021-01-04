export class Satellite {
    
    name: string;
    type: string;
    operational: boolean;
    orbitType: string; 
    launchDate: string;

    constructor(name: string, type: string, operational: boolean, orbitType: string, launchDate: string) {
        this.name = name; 
        this.type = type; 
        this.operational = operational;
        this.orbitType = orbitType; 
        this.launchDate = launchDate; 
     }
}
