let urlList = [];
for (let i = 0; i < 8; i++) {
    urlList.push('img/map_samples/map' + i + '.png')
};
urlList.push('img/backSide.png');

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

const maps = Promise.all(urlList.map(url => getImage(url)));
export default await maps