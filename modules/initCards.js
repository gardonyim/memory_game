import maps from './loadImages.js';
import {basicVars, createCanvases} from './setupGame.js';


const card = {
    ctx: null,
    map: null,
    backside: maps.pop(),
    mapOn: false,
    angle: 0,
    flipCard() {
        this.mapOn = !this.mapOn
        this.mapOn ? this.drawCard(this.map) : this.drawCard(this.backside);
    },
    drawCard(image) {
        console.log(image);
        this.ctx.drawImage(image,basicVars.imagePos,basicVars.imagePos);
    },
    rotate(){
        let rotationAngle = Math.random() * Math.PI * 2;
        this.angle += rotationAngle;

        this.ctx.translate((basicVars.canvasSize / 2), (basicVars.canvasSize / 2));
        this.ctx.rotate(rotationAngle);
        this.ctx.translate(-(basicVars.canvasSize / 2), -(basicVars.canvasSize / 2));
    },
    clearCanvas() {
        this.ctx.clearRect(0, 0, basicVars.canvasSize, basicVars.canvasSize);
    },
};

let choosenCards = {
    cardsShown: [],
    register(targetCard){
        if (this.cardsShown.length < 2) {
            this.cardsShown.push(targetCard);
        };
        if (this.cardsShown.length == 2) {
            this.compareCards()
        };
    },
    compareCards() {
        if (this.cardsShown[0].map == this.cardsShown[1].map) {
            let foundPairs =  document.querySelector('#foundMaps');
            foundPairs.appendChild(this.cardsShown[0].map);
            for (let i = 0; i < 2; i++) {
                let item = this.cardsShown.pop();
                item.clearCanvas();
                item.map = null;
            };
            if (foundPairs.children.length == maps.length) {
                alert("You have found all the pairs. Congratulation!");
            };
        } 
    },
};

let cards = [];

function createCards() {
    for (let i = 0; i < basicVars.numberOfCards; i++) {
        cards.push(Object.create(card));
        
        let ctx = document.querySelector('#card' + i).getContext('2d');
        cards[i].ctx = ctx;
    };
};


function attachMapsToCards() {
    for (let i = 0; i < maps.length; i++) {
        let j = 0;
        while (j < 2) {
            let index = Math.floor(Math.random() * basicVars.numberOfCards);
            console.log("i: ", i, "j: ", j, "index: ", index, "cards[index]: ", cards[index]);
            if (cards[index].map === null) {
                cards[index].map = maps[i];
                j++;
            };    
        };
    };
};

export {basicVars, cards, createCards, createCanvases, choosenCards, attachMapsToCards};
