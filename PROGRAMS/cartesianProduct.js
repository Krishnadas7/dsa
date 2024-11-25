const array1=[1,2]
const array2=[3,4,5]
let res=[]
for(let i=0;i<array1.length;i++){
    for(let j=0;j<array2.length;j++){
        res.push([array1[i],array2[j]])
    }
}

console.log(res);