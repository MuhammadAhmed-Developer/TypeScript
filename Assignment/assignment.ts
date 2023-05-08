//1) Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.

// var names:String[] = ["Rameez", "Ahmed", "Ali", "Zain"]
// function addValueInArray(index:number, value:number, item:String){
//  names.splice(index,value,item)
//  console.log("Modify Array",names);

// }

// addValueInArray(names.length, 0, "Aysha")

//2)  Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation

// var cartProgram: String[] = [];

// function addProducts() {
//     cartProgram.splice(0, 0, "Shirt", "Glasses")
//     console.log(`add 2product=> ${cartProgram}`)
//     cartProgram.splice(1, 1)
//     console.log(`Delete Product=> ${cartProgram}`)
//     cartProgram.splice(1, 1, "Apple")
//     console.log(`Update Product=> ${cartProgram}`)

// }
// addProducts();

// 3)Write a program that uses a while loop to print the first 25 integers

// var i =1;
// while (i<=25){
//     console.log(`First \t 25 Integers \n${i}`)
//     i++;
// }

// Write a program that uses a while loop to print the first 10 even numbers.

// var i = 1;

// while (i<=10){

//     if (i%2==0){
//         console.log(`even numbers ${i}`)
//     }

//     i++;
// }
// Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.

// function takeValue(num1:number){

//     if(num1 > 0){
//         while(num1>0 ){
//         console.log(`Print values ${num1}`)
//         num1--;
//     }

// }
// }

// takeValue(10);

// )  Write a program having an array of numbers if the number is negative it should remove the negative number from the array.

// var numbers:number[]=[2,-7,11,-23,12]
// let i = 0
// while(i < numbers.length){
//   let element = numbers[i]
//   if(element>0){
//     console.log(element);
//   }
//   i++
// }

// ) Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.


function arrayNumber(numbers: number[]) {
    var i = 0;
    while (i < numbers.length) {
        console.log(numbers[i])
        i++;
       
    }
    

}

// var giveArray:number[] = [3,6,-6,9]

arrayNumber([3, 4, -9, 18])


