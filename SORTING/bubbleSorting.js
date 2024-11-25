// function bubbleSort(arr){
//     let swapped
//     do{
//     swapped=false
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]>arr[i+1]){
//         arr[i]=arr[i]+arr[i+1]
//         arr[i]=arr[i]-arr[i+1]
//         arr[i+1]=arr[i]-arr[i]
//         swapped=true
//     }
//   }
// }while(swapped)
//   return arr
// }
// const arr=[-8,3,1,-2,7,9,-1]
// bubbleSort(arr)
// console.log(arr);
function bubbleSort(arr) {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          arr[i] = arr[i] + arr[i + 1];
          arr[i + 1] = arr[i] - arr[i + 1];
          arr[i] = arr[i] - arr[i + 1];
        swapped = true;

        }

      }
    } while (swapped);
  
    return arr;
  }
  
  const arr = [-8, 3, 1, -2, 7, 9, -1];
  bubbleSort(arr);
  console.log(arr);
//   BIG O=o(n^2)

  