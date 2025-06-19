import Car from "./car.js";

class Klaxon extends Car {
    constructor(marque, model, year, color) {
        super(marque, model, year, color);
    }
    klaxon() {
        console.log(`${this.marque} | Le klaxon de la voiture`);
    }
}

const Renault = new Klaxon("Renault", "Clio", 2020, "Rouge");
Renault.klaxon();


