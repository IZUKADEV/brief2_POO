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

export default Vehicule