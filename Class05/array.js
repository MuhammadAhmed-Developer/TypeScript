"use strict";
var studentName = ['Ahmed', "Ali", "Zain"];
// console.log("Original Array =>",studentName);
// studentName.push('zashan') //add item at the last of array
// // console.log("Add item at the last of Array =>",studentName);
// studentName.pop() //delete item at the end of array
// // console.log("Delete item at the last of Array =>",studentName);
// studentName.shift() //remove item at the first of array
// // console.log("Remove at the First of Array =>",studentName);
// studentName.unshift('Ahsan') //add item at the first of array
// console.log("Add item at the first of Array =>",studentName);
// studentName.splice(studentName.length,0, "Akbar")
// console.log("Splice Work as a Push => ",studentName);
// studentName.splice(3, 1)
// console.log("Splice Work as a PoP => ",studentName);
// studentName.splice(0,1)
// console.log("Splice Work as a Shift => ",studentName);
// studentName.splice(0,0,"Haroon")
// console.log("Splice Work as a UnShift => ",studentName);
// studentName.splice(2,0, "Raza")
// console.log("Add item at the center of array => ",studentName);
// Write a program  having an array of todos if todos are in odd delete one from the center of array otherwise remove two todos from the center of the array
// let todoArray:number[] = [2, 5, 6, 8, 10]
// if(todoArray.length%2 !== 0){
//     todoArray.splice(2,1)
//     console.log("Todo is Odd Delete One item from the center => ",todoArray);
// }else{
//    todoArray.splice(2,2)
//    console.log("Todo is even Delete Tow items from center =>",todoArray);
// }
var names = ["Rameez", "Ali", "Ahmad"];
names.splice(0, 2);
console.log(names);
