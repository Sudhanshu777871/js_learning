// const myPromise = new Promise((resolve, reject) => {
//     const x = 5;

//     if (x == 0) {
//         resolve("OK");
//     }
//     else {
//         reject("Error");
//     }
// })


// myPromise.then(
//     function (val) { console.log(val) },
//     function (err) { console.log(err) }
// )
// WITH THE HELP OF ASYNC AND AWAIT
myFun = async () => {
    var response = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello");
        }, 3000);
    });
    console.log(response);
}

myFun();
