function selectionSort(arr){
    let n=arr.length
    for(let i=0;i<n-1;i++){
        let min=i
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }
        if(min!=i){
            swap(arr,i,min)
        }
    }
}
function swap(arr,i,min){
    let temp=arr[min]
    arr[min]=arr[i]
    arr[i]=temp
}
const arr=[5,6,7,4,3,2,5,1]
selectionSort(arr)
console.log(arr)