// code for making an object
const parentObj = {
    completeDetails: function(password, address){
        return `Name : ${this.name} Email: ${this.email} Password ${password}: Address : ${address}`;
    }
}


const firstObj = {
    name: "Sudhanshu",
    email: "ksudhanshu394@gmail.com"
}

const secondObj = {
    name: "Unnay Sacchan",
    email: "unnayan56@gmail.com"
}

console.log(parentObj.completeDetails.call(firstObj, "Imparta@123", "Lucknow"))