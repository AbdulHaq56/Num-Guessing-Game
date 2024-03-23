#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        name: "GuessedNumber",
        type: "number",
        message: "Guess a Number between 0-10",
    },
]);
if (answer.GuessedNumber === randomNumber) {
    console.log("Congratulation you Guessed a right Number ;)");
}
else
    console.log("You guess a wrong Number :( ");
