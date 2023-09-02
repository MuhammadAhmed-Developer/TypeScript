"use strict";
// 1) Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
var num1 = 10;
var sum = 0;
for (var i = 2; i <= num1; i += 2) {
    sum = sum + i;
}
console.log(sum);
// function sumOfFirstNEvenNumbers(n: number): number {
//     let sum = 0;
//     for (let i = 2; i <= n; i += 2) {
//       sum += i;
//     }
//     return sum;
//   }
//   const n = 10;
//   console.log(`The sum of the first ${n} even numbers is ${sumOfFirstNEvenNumbers(n)}`);
