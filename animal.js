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

export default Animal;