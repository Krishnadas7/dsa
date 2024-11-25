let array=[6,5,4,51,7,8,0],t=10
let res=[]
function numbers(nums,t){
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===t){
                res.push(nums[i],nums[j])
                return res
            }
        }
    }
    return []
}
let resk=numbers(array,t)
console.log(resk);