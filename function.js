// CODE FOR MAKING AN SELF INVOKED FUNCTION
// (function(){
//     console.log("I am Self Invoked Function, I called Without calling the function");
// })();


// CODE FOFR PASSING THE MULTIPLE ARGUMENTS IN FUNCTION WHICH IS KNOWN AS ARGS


// function myFun(...args){
    // let sum = 0;
    // for (arg of args) {
    //     sum += arg;
    // }
    // return sum;
//     console.log(arguments.length);
// }

// code for calling teh function

// let result = myFun(1, 2, 3, 4, 5, 6, 7, 8, 9);
// console.log("The Result Is : " + result);


function myFun(){
    x=10;
}
myFun()
console.log(x);