const parentClass={
    name:"Sudhanshu",
    email:"ksudhanshu394@gmail,com",
    completeDetails:function(){
        return this.name + " " + this.email;
    }
}

const otherClass={
    name:"Jannat Zuabir Rahmani",
    email:"jannat29@gmail.com"
}
const  x= parentClass.completeDetails.bind(otherClass);
console.log(x())