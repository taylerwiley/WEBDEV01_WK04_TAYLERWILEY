import inquirer from "inquirer";
import questions from "./questions.js";

const rubric = (score, possible) => {
    const percentage = score / possible * 100
    if (percentage < 50) {
        return `Unforturnately, you failed. ${percentage}% | ${score}/${possible}`
    } else {
        return `Congrats, you passed! ${percentage}% | ${score}/${possible}`
    }
}

const welcome = () => {
    console.clear()
    console.log('Welcome to the Louisian Quiz')
    console.log(' ')
}

const run = async (questions, inquirer, welcome, fn) => {

    welcome()

    let count = 0;
    const result = await inquirer.prompt(questions)

    if (result.q1 == "1776") { ++count }
    if (result.q2 == "7") { ++count }
    if (result.q3 == "1971") { ++count }
    if (result.q4 == "Hornets") { ++count }
    if (result.q5 == "Atlanta") { ++count }

    const log = fn(count, questions.length)
    console.log(log)
}

run(questions, inquirer, welcome, rubric)
