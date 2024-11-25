const map=new Map([['a',1],['b',2],['c',3]])
map.set('d',4)
console.log(map.has('b'));
map.delete('c')
map.clear()
for([key,value] of map){
    console.log(`${key} : ${value}`);
}