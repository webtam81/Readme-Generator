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
        message: 'Please enter your project title: ',
        default: 'Readme Generator'
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Please enter your project description: ',
        default: 'A command line based readme generator using node.js. This takes input from a user and generates an professional README.md file from the input with subheadings and a table of contents.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please enter installation instructions: ',
        default: 'To install, please install.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information: ',
        default: 'Enter node.js then follow the prompts.'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please enter contribution guidelines: ',
        default: 'To contribute, please visit the github project page at github.com'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter test instructions: ', //check wording/what this is for
        default: 'Feel free to test'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        default: 'e@mail.com'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your GitHub username?',
        default: 'github'
    },
    {
        type: 'list', // select
        name: 'license',
        message: 'Please select a license for your project',
        choices: ['MIT', 'ISC'] //more needed 
    }
];



// function to write README file
function writeToFile(fileName, data) { 
    //rename old readme?
    //fs.writeFile(fileName,'newdata');
    fs.writeFile(fileName,data);
}

// function to initialize program
function init() {
//run questions
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        //fs.writeFile('README.txt', JSON.stringify(answers));
        writeToFile('README.txt', generateMarkdown(data));
        console.log('README file successfully generated');
    })
    .catch((err) => console.error(err));
}

// function call to initialize program
init();


//TODO
//gitignore for generated files...?