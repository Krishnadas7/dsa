function quicksort(arr,left=0,right=arr.length-1){
  if(left<right){
  
  
  let pivot= partition(arr,left,right)
  quicksort(arr,left,pivot-1)
  quicksort(arr,pivot+1,right)
  }
  return arr
}

function partition(arr, left , right){
    const pivot = arr[right]
        let i=left
    for(let j=left;j<right;j++){
        if(arr[j]<pivot){
            swap(arr,i,j)
            i++
        }
    }
    swap(arr,i,right)
    return i

}
function swap(arr,i,j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}
const arr=[-3,2,5,-8,1,2,3,4,5,-3]
quicksort(arr)
console.log(arr);