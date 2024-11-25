let array=[1,2,3,4,5]
// let target=2
function recSearch(arr,target){
    return search(arr,target,0,arr.length-1)
}

function search(arr,target,left,right){
    if(left>right){
        return false
    }
    let mid=Math.floor((left+right)/2)
    if(target==arr[mid]){
        return mid
    }
    if(target<arr[mid]){
        return search(arr,target,0,mid-1)
    }else{
        return search(arr,target,mid+1,right)
    }
}
let result=recSearch(array,5)
console.log(result);