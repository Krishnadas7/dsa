// let array=[2,4,5,6,1,6,7,8,9,6,55,6]
// let target=6
// function finder(nums,t){
//     for(let i=0;i<nums.length;i++){
//         for(let j=nums.length-1;j>=i;j--){
//             if(nums[i]==t){
//                 nums[j]=nums[i]

//             }
            
//         }
//         return nums
//     }
    
// }
// let k=finder(array,target)
// console.log(k);

let array = [2, 4, 5, 6, 1, 6, 7, 8, 9, 6, 55, 6];
let target = 6;

function finder(nums, t) {
    let i = 0;
    let j = nums.length - 1;

    while (i < j) {
        if (nums[i] === t) {
            // Swap nums[i] and nums[j]
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j--;
        } else {
            i++;
        }
    }

    return nums;
}

let k = finder(array, target);
console.log(k);
