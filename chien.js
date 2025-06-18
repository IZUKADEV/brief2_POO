import { Animal } from './car.js';

class ChienA extends Animal {
    faireduBruit() {
        console.log("Le bruit du chien");
    }
}

const Chien = new ChienA();
Chien.faireduBruit()