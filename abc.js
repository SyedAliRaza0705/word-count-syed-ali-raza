import inquirer from "inquirer";
const answer = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "Please enter a paragraph, we count word:"
});
const word = answer.sentence.trim().split("");
console.log(`Your sentence word is ${word.length}`);
