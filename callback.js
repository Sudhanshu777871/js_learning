const add = (a, b, otherFun) => {
    let result = a + b;
    otherFun(result);

    return ()=>{console.log(result)}
}

const x =add(2, 3, ()=>{});
x();

const displayFun = (val) => {
    console.log(val)
}