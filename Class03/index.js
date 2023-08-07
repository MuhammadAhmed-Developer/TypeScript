"use strict";
// 1) - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
//   var temperature:number = 45  //in Celsius
//   var convertInFahrenheit:number = (temperature * 9/5) + 32
//   console.log("convertInFahrenheit =>" ,convertInFahrenheit)
//     // Fahrenheit to Celsius
//     var temperature:number = 45  //in Celsius
//     var convertInClesius:number = (temperature - 32) * 5/9
//     console.log("convertInClesius=>",convertInClesius)
//   2) -- Write a program that calculates the percentage.
// var totalMarks: number = 500
// var obtainedMarks: number = 360
// var percentage: number = obtainedMarks / totalMarks * 100
// console.log(`${percentage}%`)
// // 3)  - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
// var getDays:number = 45
// var convertIntoWeek:number = Math.floor(getDays/7)
// var convertIntodays:number = getDays%7
// console.log(`${convertIntoWeek} Weeks and ${convertIntodays} days`);
// 4) - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
// var price: number = 90 //in dollers $
// var salePrice: number = 110
// var get10perscent: number = (10 / 100) * salePrice
// console.log(get10perscent, "10% discount ");
// var get5perscent: number = (5 / 100) * salePrice
// console.log(get5perscent, "5% discount ");
// if (price > 100) {
//     var givediscount: number = salePrice - get10perscent
//     console.log(`${salePrice} is sale price with 10% Discount sale Price is ${Math.floor(givediscount)} `)
// }
// else {
//     var give5perdiscount: number = salePrice - get5perscent
//     console.log(`${salePrice} is sale price with 5% Discount sale Price is ${Math.floor(give5perdiscount)} `)
// }
// 5) - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
var age = 20;
if (age > 0 && age <= 12) {
    console.log(`Your age is ${age} you are Child`);
}
else if (age >= 13 && age <= 19) {
    console.log('You are Teenager');
}
else {
    console.log('You are Adult');
}
