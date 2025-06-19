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
        super.afficherDetails() || console.log(`${this.#color}`);
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

const Toyota = new Car("Toyota", "Corolla", 2023);
Toyota.color = "Noir";
Toyota.afficherDetails();

const Honda = new Car("Honda", "Civic", 2024);
Honda.color = "Blanc";
Honda.afficherDetails();

const Susuki = new Car("Susuki", "Swift", 2025);
Susuki.color = "Vert";
Susuki.afficherDetails();

const Ford = new Car("Ford", "Fiesta", 2026);
Ford.color = "Bleu";
Ford.afficherDetails();

const BMW = new Car("BMW", "M3", 2027);
BMW.color = "Rouge";
BMW.afficherDetails();

const Mercedes = new Car("Mercedes", "S-Class", 2028);
Mercedes.color = "Noir";
Mercedes.afficherDetails();

const Audi = new Car("Audi", "A4", 2029);
Audi.color = "Rouge";
Audi.afficherDetails();

const Porsche = new Car("Porsche", "911", 2030);
Porsche.color = "Rouge";
Porsche.afficherDetails();

const Nissan = new Car("Nissan", "GTR", 2031);
Nissan.color = "Rouge";
Nissan.afficherDetails();

const Subaru = new Car("Subaru", "Impreza", 2032);
Subaru.color = "Rouge";
Subaru.afficherDetails();

export default Car;