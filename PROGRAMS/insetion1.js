function insetionSort(arr){
    for(let i=1;i<arr.length;i++){
        let numtoInsert=arr[i]
        let j=i-1
        while(j>=0 && arr[j]>numtoInsert){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=numtoInsert
    }
}
const arr=[7,6,5,1,99,1,4]
insetionSort(arr)
console.log(arr);