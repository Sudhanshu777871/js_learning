function constructorFunction(name, email, address){
this.name = name;
this.email = email;
this.address = address;
}

constructorFunction.prototype.dream="Enterprenurship";
const newObjCons = new constructorFunction("Sudhanshu","ksudhanshu394@gmail.com", "Lucknow");

console.log(newObjCons.dream)