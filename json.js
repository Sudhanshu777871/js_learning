let myDetails='{"name":"Sudhanshu Kumar","email":"ksudhanshu394@gmail.com", "password":"Indian@123"}'
// type of json is string remember
JSON.parse(myDetails,(key, value)=>{
if(value=="ksudhanshu394@gmail.com"){
console.log(key);
}
});