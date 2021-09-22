
// function getData(url) {
//     let fetchOptions = {
//         method: 'GET',
//         credentials: 'same-origin'
//     };
//     fetch(url, fetchOptions)
//         .then(response => response.json())
//         // .then(json_response => callback(json_response))
//         .then(json_response => {return json_response})
// };

async function getData(url) {
    let fetchOptions = {
        method: 'GET',
        credentials: 'same-origin'
    };
    return await fetch(url, fetchOptions).then(response => response.json());
    // let json_response = await response.json(result);
    // return result;
};

export {getData}