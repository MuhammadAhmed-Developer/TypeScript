"use strict";
// 1) Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
//   var userName:String = 'Ahmed';
//   console.log(`Hellow ${userName} Would you like to learn Python today`);
// 2) Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//   var getName:String = 'ahMed'
//    var toLowerCase = getName.toLowerCase()
//    console.log(toLowerCase);
//    var toUpperCase = getName.toUpperCase()
//    console.log(toUpperCase);
//    var totitleCase = getName[0].toUpperCase() + getName.slice(1).toLowerCase()
//    console.log(totitleCase);
// 3) Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//   var poet:String = 'Ahmed'
//   var quote:String = 'lorem ispom lorem ispom '
//   console.log(`${poet} said : "${quote}"`);
// 4) Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// function stripWhitespace(name: string): string {
//     return name.trim();
//   }
//   let username = "\t John Doe \n";
//   console.log("Name with whitespace:", username);
//   let strippedName = stripWhitespace(username);
//   console.log("Name without whitespace:", strippedName);
// 5) Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
//    console.log("Addition = >", 5+ 3)
//    console.log("Subtraction = >", 11- 3)
//    console.log("Multipication = >", 4 * 2)
//    console.log("Division = >", 8 /1)
// 6) You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line
// var num: number = 5 + 3;
// var count: number = 0; 
// for (let index = 1; count < 4; index--) { 
//     if (num > 4) {
//         console.log(num);
//         console.log("===================================================================================");
//         count++; 
//     }
// }
// 9) Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
//   var favNumber = 49
//   console.log(`${favNumber} is my Favoueite Number`);
// 11)Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// let firensa = ["Ali", "Ahmed", "Zain", "Azeem"]
//   for(let i = 0; i<firensa.length; i++){
//        console.log(firensa[i])
//   }
// 12) Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
//  let firendList = ["Ali", "Ahmed", "Zain", "Azeem"]
//  for (const name of firendList){
//     console.log(`How are You ${name} ?`);
//     }
// 13) Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
//  let favouriteTransportation = ['Honda','OD', 'BMW']
//   for(const company of favouriteTransportation){
//      if(company.includes('OD'))
//       console.log(`I Love ${company} car`);
//   }
// /14_/ Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
//   function inviteGuest(list:String[]) {
//      for(const guest of list){
//         console.log("Hello " + guest + " Please come to our party");
//      }
//   }
//  let giestList = ['Ali', 'Ahmed', 'Zain']
//   let result = inviteGuest(giestList)
// 15)// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//A) Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// 16) More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//a: Add one new guest to the beginning of your array.
var guestlist = ["Ali", "Ahmed", "Zain", "Hamid", "Farooq", "Anas"];
guestlist.unshift('Raza');
for (const guest of guestlist) {
    console.log(`${guest} You are inviting for Dinner`);
}
// 35) Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// let animalChar = [
//     {
//         name: 'Tiger',
//         legs: 4,
//         color: 'brown',
//     },
//     {
//         name: 'cat',
//         legs: 4,
//         color: 'brown',
//     },
//     {
//         name: 'dog',
//         legs: 4,
//         color: 'brown',
//     }
// ]
// let array = [
//     'This is Tiger',
//     'This is Cat',
//     'This is Dog',
// ]
// function animalname() {
//       for (let i = 0; i < animalChar.length; i++) {
//           const element = animalChar[i];
//           var name = element.name
//           console.log(name);
//         }
//     }
//  var aniname = animalname()
//  console.log(aniname);
// for (let i = 0; i < 3; i++) {
// for (let a = 0; a < 3; a++) {
//         const animal = array[a];
//         // console.log(animal);
//         console.log(animalChar[0].name,animal[0]);
//         }
//     // const element = animalChar[i];
//     // console.log(element.name[i]);
// }
// array = array.map((item2)=>{
//     let line =  (item2);
//     return line
// })
// animalChar.map((item)=>{
//  var animal = (item.name);
//  return animal
// })
// console.log(animalChar , array);
