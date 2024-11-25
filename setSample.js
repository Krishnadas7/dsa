const set =new Set([1,2,3,4])
set.add(5)
set.add(1)
// set.delete(3)
// set.clear()
console.log(set.size);
console.log(set.has(4));
for(item of set){
    console.log(item);
}