import  Animal  from '../animal.js';

class PigeonA extends Animal {
    faireDuBruit() {
        console.log("Le bruit du pigeon");
    }
}

const Pigeon = new PigeonA();
Pigeon.faireDuBruit();
