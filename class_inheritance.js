class parentClass {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    combineDetails() {
        return `Name : ${this.name} Email : ${this.email}`
    }
}

class childClass extends parentClass{
    constructor(name, email, phone, address) {
        super(name, email);
        this.phone = phone;

        this.address = address;
    }

    fullyCompletelyDetails() {
        return this.combineDetails() + " " + `Phone : ${this.phone} Address : ${this.address}}`;
    }
}

// code for intializing the class
const firstClass = new childClass("Sudhanshu Kumar", "ksudhanshu394@gmail.com", 8115830551, "Lucknow");

console.log(firstClass.fullyCompletelyDetails());