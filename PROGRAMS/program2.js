function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    const mid=Math.floor(arr.length/2)
    const left=arr.slice(0,mid)
    const right=arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}
function  merge(left,right){
    let sortedArray=[]
    while(left.length && right.length){
        if(left[0]<=right[0]){
            sortedArray.push(left.shift())
        }else{
            sortedArray.push(right.shift())
        }
    }
    const resul=[...sortedArray,...left,...right]
    return resul
}
const arr = [8, 20, -2, 4, -6]
console.log(mergeSort(arr));