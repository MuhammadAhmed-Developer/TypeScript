
// In Object define all keys tye
// ? is used to ignore the key is present or not
type carType = {company?:string, isUsed:boolean, year:number}
var car:carType={
    company:"Honda",
    isUsed: false,
    year: 2023
}




var car2:carType[]=[
    {
    // company:"Honda",
    isUsed: false,
    year: 2023
},
{
    company:"Honda",
    isUsed: false,
    year: 2023
},
{
    company:"Honda",
    isUsed: false,
    year: 202000
}
]

// console.log(car, car2[2].year);



// Write a program thet print all the car and company and year from the list

var car2:carType[]=[
    {
    company:"Honda",
    isUsed: false,
    year: 2023
},
{
    company:"civic",
    isUsed: false,
    year: 2020
},
{
    company:"kia",
    isUsed: false,
    year: 2021
}
]

for (let index = 0; index < car2.length; index++) {
    const element = car2[index];
    // console.log("Company => " ,element.company)
    // console.log("Year =>",element.year)
    
}

car2.forEach(item=>{
    // console.log("Company=>",item.company || "Year=>", item.year);
    
})



type arrayType = {company:string, isUsed?:boolean, year?:number}

let companies = ["kia","Honda","Civic","od","BMW", "MG"]

let cars:arrayType[]= []

for (let index = 0; index < 20; index++) {
      cars.push( {
     company:companies[Math.floor(Math.random()* companies.length)],
     isUsed:[true, false][Math.floor(Math.random()*2)],
     year:Math.floor(Math.random()*(2023-1980) + (2023 - 43))
    })                               
    
     
}
console.log(cars);

