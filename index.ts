#! /usr/bin/env node
import inquirer from "inquirer";

const calculator = await inquirer.prompt([
  {
    name: `FirstNo`,
    message: `for calculation, enter the first number`,
    type: `number`,
  },

  {
    name: `SecondNo`,
    message: `for calculations, enter the second number`,
    type: `number`,
  },

  {
    name: `ThirdNo`,
    message: `for calculation, enter the third number(option only for +, - ,* )
    \n Instruction: if you don't want to add any number here 
    \nWrite :
    \n 0 for add & sub. 
    \n 1 for multiply.
    \n if you like to add more no add any number`,
    type: `number`,
  },

  {
    name: `operations`,
    message: `select any one the following operations`,
    type: `list`,
    choices: [
      `addition '+'`,
      `subtraction '-'`,
      `multiplication '*'`,
      `division '/'`,
      `percentage '/*100'`,
      `exponent'**'`,
      `modules '%'`,
    ],
  },
]);


if(calculator.operations === `addition '+'` ){
  console.log(calculator.FirstNo +calculator.SecondNo + calculator.ThirdNo)
}
else if(calculator.operations === `subtraction '-'` ){
  console.log(calculator.FirstNo -calculator.SecondNo - calculator.ThirdNo)
}
else if(calculator.operations === `multiplication '*'` ){
  console.log(calculator.FirstNo *calculator.SecondNo * calculator.ThirdNo)
}
else if(calculator.operations === `division '/'` && !calculator.ThirdNo){
  console.log(calculator.FirstNo /calculator.SecondNo)
}
else if(calculator.operations === `percentage '/*100'` && !calculator.ThirdNo){
  console.log(calculator.FirstNo /calculator.SecondNo *100)
}
else if(calculator.operations === `exponent'**'` && !calculator.ThirdNo){
  console.log(calculator.FirstNo **calculator.SecondNo)
}
else if(calculator.operations === `modules '%'` && !calculator.ThirdNo){
  console.log(calculator.FirstNo % calculator.SecondNo)
}

else{ console.log('Syantic error "read the thirdNo closely');
}

