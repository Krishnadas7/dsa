const obj={
    name:"Bruce",
    age:23,
    "ket-fee":true,
    ju:3,
    saymyname:function(){
        console.log(this);
    }
}
obj.hobby="football"
delete obj.hobby
// console.log(obj.name);
// console.log(obj["age"]);
// console.log(obj);
obj.saymyname()