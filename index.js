const fs = require("fs/promises");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
//project title, description*, table of contents, installtion*, usage*, license*, contributing*, tests*, questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter your project title: '
    },
    /*{
        type: 'input',
        name: 'desc',
        message: 'Please enter your project description: '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information: '
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please enter contribution guidelines: '
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter test instructions: ' //check wording/what this is for
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your GitHub username?'
    },*/
    {
        type: 'list', // select
        name: 'license',
        message: 'Please select a license for your project',
        choices: ['MIT', 'ISC'] //more needed 
    }
];

// function to write README file
function writeToFile(fileName, data) { 
    fileName = 'README.txt';
    fs.writeFile(fileName, 'testingg t');
}

// function to initialize program
function init() {
//rename old readme?
//run questions
     
    inquirer.prompt(questions)
        .then((answers) => console.log(answers))
        .then(() => writeToFile())
        .catch((err) => console.error(err));
    
}

// function call to initialize program
init();


//TODO
//gitignore for generated files...?