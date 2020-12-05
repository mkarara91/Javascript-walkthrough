const promise = new Promise((resolve, reject) => {
    //condition for example xhr request status code 200
    let condition = false;

    if(condition){
        resolve("promise is resolved successfully");
    } else {
        reject("promise is rejected");
    }
});

promise.then((msg)=> console.log(msg)).catch((msg)=> console.log(msg));