const myArr = [12, 23, 45, 55, 67, 78];

// code for making a function to show the arr data after operation
const showData = (data) => {
    return data > 50;
}
// code for using the map function
// const showResult = myArr.map(showData);
// console.log(showResult)

// code for using the filter method
// const showResult = myArr.filter(showData)
// console.log(showResult)

// code for using the reduce method
const showResult = myArr.reduce((sum, curr) => {
    sum = sum + curr;
    return sum;
}, 0)
console.log("The Sum Of Array Is : " + showResult)