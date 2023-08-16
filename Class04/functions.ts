// 1) - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.

// var temperature:number = 45  //in Celsius
// var convertInFahrenheit:number = (temperature * 9/5) + 32
// console.log("convertInFahrenheit =>" ,convertInFahrenheit)
//   // Fahrenheit to Celsius
//   var temperature:number = 45  //in Celsius
//   var convertInClesius:number = (temperature - 32) * 5/9
//   console.log("convertInClesius=>",convertInClesius)

  function convertInFahrenheit(temp:number){
    var converted:number = (temp * 9/5) + 32
    return converted
    
  }

 var result =  convertInFahrenheit(36)
//   convertInFahrenheit()
console.log(result);
