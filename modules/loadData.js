import {getData} from './dataHandler.js';


async function loadBasicVars () {
    let basicVars = await getData('http://localhost:3000/image_data');
    
    basicVars.canvasSize = basicVars.imageSize * 1.4;
    basicVars.imagePos = (basicVars.canvasSize - basicVars.imageSize) / 2;
    basicVars.mapList = await getData('http://localhost:3000/map_samples');
    basicVars.numberOfCards = basicVars.mapList.length * 2;
    return basicVars;
};

const basicVars = loadBasicVars ();
export default await basicVars