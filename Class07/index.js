"use strict";
// 1) Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
// var num1 :number =10 ;
// var sum =0;
// for(var i = 2; i<=num1; i+=2){
//     sum = sum +i;
// }
// console.log(sum)
// 2)  - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
// let array = [3,3,4,5,6,7,8,89]
// for (var i=1;i<array.length; i++){
// if (array[i]%2==0){
//     console.log("Even number = ",array[i]);
// }
// }
var array = [2, 4, 6, 1, 3];
var num = array[0];
for (let index = 0; index < array.length; index++) {
    if (array[index] > num) {
        num = array[index];
    }
}
console.log(num);
// function findMax(arr:number[]) {
//     let maxVal = arr[0]; // Assume the first element is the maximum
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > maxVal) {
//         maxVal = arr[i];
//         console.log(maxVal);
//     }
//     // return maxVal;
//   }
// }
//   const numbers = [5, 2, 9, 1, 5, 6];
//   const maxValue = findMax(numbers);
// //   console.log("The maximum value is:", maxValue);
