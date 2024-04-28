import inquirer from "inquirer";

const answers :{
numberOne: number,
numberTwo: number,

} = await inquirer.prompt([

{
    type: "number",
    name: "numberOne",
    message: "enter 1st no:"
},
{
    type: "number",
    name: "numberTwo",
    message: "enter 2nd no:"
},
{
    type: "list",
    name: "operator",
    choices:["*","+","/","-"],
    message: "select operator"
    },

]);
const {numberOne, numberTwo, operator} = answers

if (numberOne && numberTwo && operator) {
    let result: number = 0;
    if( operator === "+"){
        result = numberOne + numberTwo
    } 
    
    else if( operator === "-"){
        result = numberOne - numberTwo
}

else if( operator === "*"){
    result = numberOne * numberTwo
}

else if( operator === "/"){
    result = numberOne / numberTwo
}
console.log("your result is", result)
}
else {
    console.log("kindly select right input")
}