function quickSort(arr,left=0,right=arr.length-1){
    if(left<right){
        const piviot=partition(arr,left,right)
        quickSort(arr,left,piviot-1)
        quickSort(arr,piviot+1,right)
    }
    return arr
}

function partition(arr,left,right){
    let piviot=arr[right]
    let i=left
    for(let j=left;j<right;j++){
        if(arr[j]<piviot){
            swap(arr,i,j)
            i++
        }
    }
    swap(arr,i,right)
    return i
}
function swap(arr,left,right){
    let temp=arr[left]
    arr[left]=arr[right]
    arr[right]=temp
}
const arr=[9,8,7,6,5,4,1,6,1]
console.log(quickSort(arr));