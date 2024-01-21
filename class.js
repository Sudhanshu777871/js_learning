class myDetails {
    constructor(name, email, password, id, salary) {
        this.name = name; //this is properties
        this.email = email; //this is properties
        this.password = password; //this is properties
        this.id = id; //this is properties
        this.salary = salary; //this is properties
    }

    getFullDetails(){
        return `Name : ${this.name} Email : ${this.email} Password : ${this.password} Id : ${this.id} Salary : ${this.salary}`; // this is method
    }
}
// code for accessing the class
const firstEmployee = new myDetails("Sudhanshu Kumar","ksudhanshu394@gmail.com","Imparta@123", 29,9000000);

console.log(firstEmployee.getFullDetails());