import Animal from '../animal.js';

class TonnyA extends Animal {
    faireDuBruit() {
        console.log("j'vais aller me faire un café");
    }
}

const Tonny = new TonnyA();
Tonny.faireDuBruit();
