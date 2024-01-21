const apiKey = "https://api.github.com/users/Sudhanshu777871";

// code for calling api using async await
// async function callApi() {
//     try {
//         const getData = await fetch(apiKey);
//         if (getData.ok) {
//             const convert = await getData.json();
//             return convert;
//         } else {
//             throw new Error("Some Error Occured")
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }


// (async () => {
//     const data = await callApi();
//     console.log(data)
// })();


// code for calling the API using promise method()
const myPromise = new Promise((resolve, reject) => {
    fetch(apiKey).then((data) => {
        return data.json();
    }).then((data) => {
        resolve(data)
    }).catch((error) => {
        reject(error)
    })
})

// code for calling a promise
myPromise.then((data)=>{
console.log(data)
}).catch((error)=>{
console.log(error)
})