"use strict";
// 1) - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
//   var temperature:number = 45  //in Celsius
//   var convertInFahrenheit = (temperature * 9/5) + 32
//   console.log("convertInFahrenheit =>" ,convertInFahrenheit)
//     // Fahrenheit to Celsius
//     var temperature:number = 45  //in Celsius
//     var convertInClesius = (temperature - 32) * 5/9
//     console.log("convertInClesius=>",convertInClesius)
//   2) -- Write a program that calculates the percentage.
var totalMarks = 500;
var obtainedMarks = 360;
var percentage = obtainedMarks / totalMarks * 100;
console.log(`${percentage}%`);
// 3)  - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
var getDays = 45;
var convertIntoWeek = Math.floor(getDays / 7);
var convertIntodays = getDays % 7;
console.log(`${convertIntoWeek} Weeks and ${convertIntodays} days`);
