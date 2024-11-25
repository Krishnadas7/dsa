function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    const mid = Math.floor(arr.length/2)
    const leftArray=arr.slice(0,mid)
    const rightArray=arr.slice(mid)
    return merge(mergeSort(leftArray),mergeSort(rightArray))

}
function merge(left,right){
    let sortedArray=[]
    while(left.length && right.length){
        if(left[0]<=right[0]){
         sortedArray.push(left.shift())
        }else{
            sortedArray.push(right.shift())
        }
    }
    return [...sortedArray,...left,...right]
}
const arr=[9,8,7,6,12,3,11,8]
console.log(mergeSort(arr));