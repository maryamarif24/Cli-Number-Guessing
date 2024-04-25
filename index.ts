#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
    {
        name : "UserGuessedNumber",
        type : "number",
        message : "Please guess a number between 1-6:",
    }
]);

if (answer.UserGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the right number.");
} else {
    console.log("You guessed the wrong number.");
}