// settimeout comment

// function myFun() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         },i* 1000);
//     }
// };


// myFun();

// using var

// function x() {
//     for (var i = 1; i <= 5; i++) {
//         function close(x) {
//             setTimeout(() => {
//                 console.log(x)
//             }, x * 1000);
//         }
//         close(i);
//     }
// }
// x();
const myFun=()=>{
    var a=10;
}

myFun();
console.log(a)