import Animal from '../animal.js';
class ChatA extends Animal {
    faireduBruit() {
        console.log("Le bruit du chat");
    }
}

const Chat = new ChatA();
Chat.faireduBruit()

