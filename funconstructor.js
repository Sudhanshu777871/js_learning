function myConstructor(name, email, address, age) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.age = age;
    this.completeDetails = function () {
        return this.name + " " + this.email + " " + this.address + " " + this.age;
    }
}

const e1 = new myConstructor("Sudhanshu Kumar", "ksudhanshu394@gmail.com", "Lucknow", 18);
const e2 = new myConstructor("Jannat", "jannat29@gmail.com","Mumbai",18);
e1.addhar = 88132832939; // adding new property to object constructor
e1.completeDetails = function () {
    return this.name + " " + this.email + " " + this.address + " " + this.age;
}// adding new method to constructor object function
console.log(e2.completeDetails())