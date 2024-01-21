// async function myFun() {
//     return "Sudhanshu";
// }

// const promiseData = myFun();
// promiseData.then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// });

// CODE FOR MAKING NORAMLA PROMISE


const myPromise = new Promise((resole, reject) => {
    setTimeout(() => {
        resole("I am normal Promise and I am Resolved After 3 seconds....");
    }, 5000);

})

// myPromise.then((data) => {
//     console.log(data);
// })

// console.log("I am Runnig After The Promise...");

// CODE FOR MAKING A PROMISE USING ASYNC AWAIT
async function myFun(){
const data = await myPromise;
console.log(data)
console.log("I am Code after the promise in async function...");
}

myFun();