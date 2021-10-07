import {basicVars, cards, createCards, createCanvases, choosenCards, attachMapsToCards} from './modules/initCards.js';


function handleFlipBack(){
    if (choosenCards.cardsShown.length >= 2) {
        while (choosenCards.cardsShown) {
            let item = choosenCards.cardsShown.pop();
            item.clearCanvas();
            item.rotate();
            item.flipCard();
        };
    };
};

function hit(event) {
    let targetCard = cards[this.getAttribute('id').slice(4)];
    
    let rotationAngle = 2 * Math.PI - targetCard.angle;
    let hitX = (event.offsetX - basicVars.canvasSize / 2) * Math.cos(rotationAngle) - (event.offsetY - basicVars.canvasSize / 2) * Math.sin(rotationAngle) + basicVars.canvasSize / 2;
    let hitY = (event.offsetX - basicVars.canvasSize / 2) * Math.sin(rotationAngle) + (event.offsetY - basicVars.canvasSize / 2) * Math.cos(rotationAngle) + basicVars.canvasSize / 2;
    
    let onCard = hitX >= basicVars.imagePos && hitX <= (basicVars.canvasSize - basicVars.imagePos) && hitY >= basicVars.imagePos && hitY <= (basicVars.canvasSize - basicVars.imagePos);
    if (onCard && !targetCard.mapOn && choosenCards.cardsShown.length < 2) {
        targetCard.flipCard();
        choosenCards.register(targetCard);
    } else if (onCard && targetCard.mapOn) {
        handleFlipBack();
    };
};

function putCardsOnBoard() {
    for (let cardInstance of cards) {
        cardInstance.rotate();
        cardInstance.drawCard(cardInstance.backside);
    };
};

function attachEventListeners () {
    let btn = document.querySelector('#flipBack');
    btn.addEventListener('click', handleFlipBack);
    
    let canvasList = document.querySelectorAll('canvas');
    for (let item of canvasList) {
        item.addEventListener('click', hit);
    };
};

createCanvases();
createCards();
attachEventListeners();
attachMapsToCards();
putCardsOnBoard();
