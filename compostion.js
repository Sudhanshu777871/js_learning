const add = (a, b) => {
    return a + b;
}

const sqare = (val) => {
    return val * val;
}

const compose = (f1, f2) => {
    return (a, b) => { return f1(f2(a, b)) }
};

console.log(compose(sqare, add)(3, 4));