function insertionSort(arr){
    for(let i=0;i<arr.length;i++){
        let numberToInsert=i
        let j=i-1
       while(j>=0 && arr[j] > numberToInsert){
        arr[j+1]=arr[j]
        j--
       }
       arr[j+1]=numberToInsert
    }
}
const arr=[9,8,7,6,5,43,-1]
insertionSort(arr)
console.log(arr);