const apiKey = "https://api.github.com/users/Sudhanshu777871";


// calling API usng the async/ await method
// async function fetchData() {

//     try {
//         const fetching = await fetch(apiKey);
//         if (fetching.ok) {
//             const convert = await fetching.json();
//             console.log(convert)
//         } else {
//             throw new Error("Some Problem Occured, Try After Some Time");
//         }
//     }
//     catch (error) {
//         console.log(error)
//     }

// }
// fetchData();


// calling api using the promise

const myPromise = new Promise((resolve, reject) => {
    fetch(apiKey).then((data) => {
        return data.json();
    }).then((data) => {
        resolve(data)
    }).catch((error) => {
        reject(error)
    })
})

myPromise.then((data)=>{
console.log(data)
}).catch((error)=>{
console.log(error)
})