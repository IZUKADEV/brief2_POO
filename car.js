class Vehicule {
    #marque;
    #model;
    #year;
    
    constructor(marque, model, year) {
        this.#marque = marque;
        this.#model = model;
        this.#year = year;
    }
    
    get marque() {
        return this.#marque;
    }
    
    get model() {
        return this.#model;
    }
    
    get year() {
        return this.#year;
    }
    
    set marque(marque) {
        this.#marque = marque;
    }
    
    set model(model) {
        this.#model = model;
    }
    
    set year(year) {
        this.#year = year;
    }
    
    afficherDetails() {
        console.log(`${this.#marque} ${this.#model} ${this.#year}`);
    }
}

class Car extends Vehicule {
    #color;
    
    constructor(marque, model, year, color) {
        super(marque, model, year);
        this.#color = color;
    }
    
    get color() {
        return this.#color;
    }
    
    set color(color) {
        this.#color = color;
    }
    
    afficherDetails() {
        console.log(`${this.marque} ${this.model} ${this.year} ${this.#color}`);
    }
}

const Renault = new Car("Renault", "Clio", 2020);
Renault.color = "Turquoise";
Renault.afficherDetails();


const Peugeot = new Car("Peugeot", "208", 2021);
Peugeot.color = "Jaune";
Peugeot.afficherDetails();

const Citroen = new Car("Citroen", "C3", 2022);
Citroen.color = "Rouge";
Citroen.afficherDetails();


class Animal {
    #Chien;
    #Chat;
    constructor(chien, chat) {
        this.#Chien = chien;
        this.#Chat = chat;
    }

    get Chien() {
        return this.#Chien;
    }
    get Chat() {
        return this.#Chat;
    }
    faireduBruit() {
        console.log("Le bruit de l'animal");
    }
}

export { Animal, Car };