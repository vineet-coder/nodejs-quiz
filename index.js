var readLineSync = require("readline-sync");
const chalk = require("chalk");
var score = 0;
var userAnswer = readLineSync.question(chalk.blue.bold("What is your name?? "));

console.log(chalk.red("welcome " + chalk.underline(userAnswer) + "!!"));
console.log("-----------------------------------");

console.log(chalk.bgRed.white.bold("so lets play") + "  " + chalk.bgBlue.white.underline.bold('kon banega node js janne vala??'));
console.log("-----------------------------------");
console.log(chalk.bgRed.white.bold("but there is no life line and no options!!"));
console.log("-----------------------------------");
console.log(chalk.bgRed.white.bold("the game is very simple you have to answer in only two words 'yes' or 'no' !!"));
console.log("-----------------------------------");


function play(question, answer) {
  var userA = readLineSync.question(chalk.blue.bold(question));
  if (userA === answer) {
    console.log("-----------------------------------");
    console.log(chalk.green.bold("you are right"));
    score = score + 1;

  } else {
    console.log("-----------------------------------");
    console.log(chalk.red.bold("sorry you need to learn!!"))
    score = score - 1;

  }
  console.log("-----------------------------------");
  console.log("your score is : " + chalk.bgGreen.blue.underline.bold(score));
  console.log("-----------------------------------");
}


var questions = [{
  question: "Q1 - the object in the node js consist a key value pair??",
  answer: "yes"
},
{
  question: "Q2 - function has only two phase 'input and output'?",
  answer: "no"
},
{
  question: "Q3 - In arrayName.length the .length is a property of array??",
  answer: "yes"
},
{
  question: "Q4 - Javascript was invented by Brendan Eich?",
  answer: "yes"
},
{
  question: "Q5 - let myVariable = 'Bob'; Is myVariable an integer?",
  answer: "no"
}, {
  question: "Q6 - An operator is a mathematical symbol that produces a result based on two values (or variables). Is it correct?",
  answer: "yes"
}, {
  question: "Q7 - Events are a way of packaging functionality that you wish to reuse.?",
  answer: "no"
}, {
  question: "Q8 -  Functions are code structures that listen for activity in the browser, and run code in response.?",
  answer: "no"
}, {
  question: "Q9 - You access the object's properties and methods using dot notation. Is it correct?",
  answer: "yes"
}, {
  question: "Q10 - JSON is a text-based data format following JavaScript object syntax. Is it true?",
  answer: "yes"
}];


for (var i = 0; i < questions.length; i++) {
  var list = questions[i];

  play(list.question, list.answer)

}
console.log("                                    ");
console.log("                                    ");
console.log("                                    ");
console.log(chalk.bgRed.white.bold("your final score is: " + chalk.underline(score)));