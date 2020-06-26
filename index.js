const inquirer = require("inquirer");
const fs = require("fs");

let test = 'Test'

const questions = [
    inquirer.prompt([
        {
            name: "userGitHub",
            message: "What is your GitHub username?"
        },
        {
            name: "userEmail",
            message: "What is your email address?"
        },
        {
            name: "userProject",
            message: "What is your project's name?"
        },
        {
            name: "userDescription",
            message: "Please write a short description of your project"
        },
        {
            name: "userLicense",
            message: "What kind of license should your program have?",
            type: "list",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "none"]
        },
        {
            name: "userDependencies",
            message: "What command should be run to install dependencies?",
            default: "npm i"
        },
        {
            name: "runTest",
            message: "What command should be run to run tests?",
            default: "npm test"
        },
        {
            name: "userKnow",
            message: "What does the user need to know about using the repo?"
        },
        {
            name: "userContribute",
            message: "What does the user need to know about contributing to the repo?"
        },
    

    ]).then(answers => {
        let fileName = answers.userProject + ".txt";

        fs.writeFile(fileName, JSON.stringify(answers, null, 4), (err) => {
            if (err) {
                throw err;
            }
            console.log("file has been saved!");
        });
    })
];



    // console.log(questions);
    // )};

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
