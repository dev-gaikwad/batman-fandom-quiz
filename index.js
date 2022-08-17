import readlineSync from 'readline-sync';
import Chalk from 'chalk';

var score = 0;
console.log(Chalk.bgBlack("Batman Fandom Quiz"));
var userName = readlineSync.question("Enter your Fandom Quiz username : ");
console.log(Chalk.blue("Welcome ", userName, "! "));


var difficulty = ['Easy', 'Medium', 'Hard']
var level = readlineSync.keyInSelect(difficulty, "Select your difficulty level : ");
if (level === -1) {
  console.log("Goodbye!");
}
else {
  console.log(difficulty[level], "level is loaded \n");
}

console.log(Chalk.bgGray("Rules:\n"));
console.log(Chalk.gray("1.Start your answer with a captial letter. Eg- Answer\n2.Wrong spelling will be counted as wrong answer\n"));


var levelEasy = [
  {
    question: "What is the civilian name of Batman ?(Firstname Lastname)\n",
    answer: "Bruce Wayne"
  },
  {
    question: "What is the name of Batman's butler ?(Firstname)\n",
    answer: "Alfred"
  },
  {
    question: "What colour is associated with Batman ?\n",
    answer: "Black"
  },
  {
    question: "What is the name of Batman's city ?\n",
    answer: "Gotham"
  },
  {
    question: "Which universe is Batman from ?(MCU/DCU)\n",
    answer: "DCU"
  }
]

var levelMedium = [
  {
    question: "What is Alfred's last name?\n",
    answer: "Pennyworth"
  },
  {
    question: "What is the name of former District Attorney that became the villan Two-Face ?(Firstname Lastname)\n",
    answer: "Harvey Dent"
  },
  {
    question: "What is the name of Batman's mother?(Firstname Lastname)\n",
    answer: "Martha Wayne"
  },
  {
    question: "What is the name of Batman's father ?(Firstname Lastname)\n",
    answer: "Thomas Wayne"
  },
  {
    question: "Batman is reffered to as a Caped _______\n",
    answer: "Crusader"
  }
]

var levelHard = [
  {
    question: "What is the name of the mugger who killed Batman's parents ?(Firstname Lastname)\n",
    answer: "Joe Chill"
  },
  {
    question: "What is the name of the Bat-Hound ?\n",
    answer: "Ace"
  }
]
if (level === 0) {
  for (var i = 0; i < levelEasy.length; i++) {
    fandomQuiz(levelEasy[i].question, levelEasy[i].answer);
  }
}

if (level === 1) {
  for (var i = 0; i < levelMedium.length; i++) {
    fandomQuiz(levelMedium[i].question, levelMedium[i].answer);
  }
}

if (level === 2) {
  for (var i = 0; i < levelHard.length; i++) {
    fandomQuiz(levelHard[i].question, levelHard[i].answer);
  }
}

function fandomQuiz(question, rightAnswer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === rightAnswer) {
    console.log(Chalk.bgGray("\u2713 Correct Answer !\n"));
    score++;
  }
  else {
    console.log(Chalk.bgBlack("\u2718 Wrong Answer !\nCorrect Answer is ", rightAnswer))
  }

  console.log(Chalk.yellow("Score : ", score));
}

console.log(Chalk.bgYellow("Final Score : ", score));