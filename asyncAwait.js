const axios = require("axios");

// The async keyword will automatically create a new Promise and return it.
async function getJsonAsync(){

    try {
        let jsonRes = await axios('https://tutorialzine.com/misc/files/example.json');
        return jsonRes;
    } 
    catch (error){  // error handling
        console.log(error);
    }
}

getJsonAsync().then((res) => {
    console.log(res.status);
});