import inquirer from "inquirer";
// inquirer.prompt([
//     {
//     name:"name",
//     type:"input",
//     message:"Enter Your Name?"
// },
//     {
//     name:"age",
//     type:"number",
//     message:"Enter Your Age?"
// },
// ])
// .then((ans)=>{
//     console.log(ans);
// })
//calculator
inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter Num1"
    },
    {
        name: "num2",
        type: "number",
        message: "Enter Num2?"
    },
    {
        name: "Operation",
        type: "list",
        message: "Enter OPeration",
        choices: ["Add", "Subtract"]
    },
])
    .then((ans) => {
    switch (ans.Operation) {
        case "Add":
            console.log(ans.num1 + ans.num2);
            break;
        default:
            break;
    }
});
// function repeat(a:number) {
//      console.log(a)
// }
// setTimeout(() => {
//     repeat(45)
// }, 5000);
