import ABC from "./util/ABC.js";

class Letter {
    constructor() {
        this.id;
        this.dom;
        this.speed = ABC.getRandmon(0, 10);
        this.txt = ABC.getRandmonLetter();
        this.startX = ABC.getRandmon(200, 1000);
        this.startY = 100;
        this.endY = 10000;
    }

}

export default Letter;