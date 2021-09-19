

const basicVars = {
    imageSize: 200,
    canvasSize: null,
    imagePos: null,
    numberOfCards: 16,

};

basicVars.canvasSize = basicVars.imageSize * 1.4;
basicVars.imagePos = (basicVars.canvasSize - basicVars.imageSize) / 2;

function createCanvases() {
    let canvasContainer = document.querySelector('#canvasContainer');
    for (let i = 0; i < basicVars.numberOfCards; i++) {
        let canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'card' + i);
        canvas.setAttribute('width', basicVars.canvasSize);
        canvas.setAttribute('height', basicVars.canvasSize);
        canvasContainer.appendChild(canvas);
    }
};

export {basicVars, createCanvases}