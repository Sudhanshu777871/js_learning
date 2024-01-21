// const myJsonData = '{ "name": "Sudhanshu", "age": "18", "address": "Lucknow", "phone": "8115830551" }';

// console.log(typeof(myJsonData))


// const myObjectData = { name: "Sudhanshu", age: 18, address: "Lucknow", phone: 8115830551, fetchData:function(){return `Name : ${this.name} Age : ${this.age} Address : ${this.address} "Phone":${this.phone}}`} };

// console.log(myObjectData.fetchData())

// MAKING JSON WITH ARRAY
// const myJsonData={
//     "name":"Sudhanshu Kuamr",
//     "age":"18",
//     "friends":["Akhilesh","Vijay","Sarjan","Rahul","Mayank","Sarjan"],
//     "address":"Lucknow"

// }



// console.log(myJsonData.friends[0])

// CODE FOR MAKING JSON WHICH INCLUDES DATE, undefined
// const jsonData='{"name":"Sudhanshu","email":"ksudhanshu394@gmail.com","phone":"8115830551"}'

// const convertData = JSON.parse(jsonData);
// for(let x in convertData){
//     console.log(convertData[x]);
// }

// const xmlhttp = new XMLHttpRequest();
// xmlhttp.onload = function () {
//     const myObj = JSON.parse(this.responseText);
//     console.log(myObj)
// }
// xmlhttp.open("GET", "about.txt");
// xmlhttp.send();


const myData = '{"name":"Sudhanshu","Email":"ksudhanshu394@gmail.com","phone":"811583051"}';

const obj = JSON.parse(myData, (key, value) => {
    if (key === "Email") {
        console.log(value)
    }
});

