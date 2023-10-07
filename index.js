const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
//project title, description, table of contents, installtion, usage, license, contributing, tests, questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter your project title: '
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Please enter your project description: '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter your installation instructions: '
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
        message: 'Please enter test infomation: ' //check wording/what this is for
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
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
//rename old readme?
//run questions

}

// function call to initialize program
init();
