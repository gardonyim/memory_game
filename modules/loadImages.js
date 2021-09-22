import {getData} from './dataHandler.js';
import basicVars from './loadData.js';


function getImage(url){
    return new Promise(function(resolve, reject){
        let img = new Image()
        img.onload = function(){
            resolve(img)
        }
        img.onerror = function(){
            reject(img)
        }
        img.src = url
    })
};

async function loadMaps (path) {
    let mapList = await getData('http://localhost:3000/map_samples');
    let urlList = [];
    for (let item of mapList) {
        urlList.push(path + item);
    };
    urlList.push(basicVars.backsideImage);
    return Promise.all(urlList.map(url => getImage(url)));
};

const maps = loadMaps (basicVars.mapSamplesRoute);
export default await maps