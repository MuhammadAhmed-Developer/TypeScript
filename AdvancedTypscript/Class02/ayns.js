import inquirer from "inquirer";
inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter Your Name?"
    },
    {
        name: "age",
        type: "number",
        message: "Enter Your Age?"
    },
])
    .then((ans) => {
    console.log(ans);
});
// function repeat(a:number) {
//      console.log(a)
// }
// setTimeout(() => {
//     repeat(45)
// }, 5000);
