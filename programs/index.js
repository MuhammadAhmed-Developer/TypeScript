"use strict";
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
// var userName = 'Muhammad Ahmed'
// console.log(`Hellow ${userName} would you like to learn some Python today? `)
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var getName = prompt('Enter Name');
var covertedUpper = getName.toUpperCase();
var covertedLower = getName.toLowerCase();
var capitalizeString = getName.charAt(0).toUpperCase() + getName.slice(1);
console.log(covertedUpper);
console.log(covertedLower);
console.log(capitalizeString);
