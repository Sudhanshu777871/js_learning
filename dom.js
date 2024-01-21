// const li = document.getElementsByTagName("li");
// let i=0;
// while(i<=li.length-1){
//     console.log(li[i].innerHTML);
//     ++i;
// }

const name = document.getElementsByName("name");

name[0].style.borderColor="red";
name[0].style.backgroundColor="red";
name[0].style.color="white";

const age = document.getElementById("age");
age.type="email";

console.log(age);