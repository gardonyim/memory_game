
async function getData(url) {
    // let fetchOptions = {
    //     method: 'GET',
    //     credentials: 'same-origin'
    // };
    // return await fetch(url, fetchOptions).then(response => response.json());

    // Mock API response:
    if (url === 'http://localhost:3000/image_data') {
        return Promise.resolve({
            imageSize: 200,
            mapSamplesRoute: "img/map_samples/",
            backsideImage: "img/backSide.png"
        })
    };
    if (url === 'http://localhost:3000/map_samples') {
        return Promise.resolve([
            "map0.png", "map1.png", "map2.png", "map3.png", "map4.png", "map5.png", "map6.png", "map7.png"
        ])
    }
};

export {getData}