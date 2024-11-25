// function factorial(n){
//  if( n===0){
//     return 1
//  }

//     return n* factorial(n-1)
// }
// console.log(factorial(5));

function f(n){
  if(n<=1){
   return
  }
  f(n-1)
  console.log(n);
  f(n-1)
}
f(5)