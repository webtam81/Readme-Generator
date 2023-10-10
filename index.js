const fs = require("fs/promises");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter your project title: '/*,
        default: 'Readme Generator'*/
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Please enter your project description: '/*,
        default: 'A command line based readme generator using node.js. This takes input from a user and generates an professional README.md file from the input with subheadings and a table of contents.'*/
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please enter installation instructions: '/*,
        default: 'To install, please install.'*/
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information: '/*,
        default: 'Enter node index.js then follow the prompts.'*/
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please enter contribution guidelines: '/*,
        default: 'To contribute, please visit the github project page at github.com'*/
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter test instructions: '/*, 
        default: 'Feel free to test'*/
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'/*,
        default: 'e@mail.com'*/
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'/*,
        default: 'github'*/
    },
    {
        type: 'list', 
        name: 'license',
        message: 'Please select a license for your project',
        choices: [
            'AFL-3.0',
            'Apache-2.0',
            'Artistic-2.0',
            'BSL-1.0',
            'BSD-2-Clause',
            'BSD-3-Clause',
            'BSD-3-Clause-Clear',
            'BSD-4-Clause',
            '0BSD',
            'CC',
            'CC0-1.0',
            'CC-BY-4.0',
            'CC-BY-SA-4.0',
            'WTFPL',
            'ECL-2.0',
            'EPL-1.0',
            'EPL-2.0',
            'EUPL-1.1',
            'AGPL-3.0',
            'GPL',
            'GPL-2.0',
            'GPL-3.0',
            'LGPL',
            'LGPL-2.1',
            'LGPL-3.0',
            'ISC',
            'LPPL-1.3c',
            'MS-PL',
            'MIT',
            'MPL-2.0',
            'OSL-3.0',
            'PostgreSQL',
            'OFL-1.1',
            'NCSA',
            'Unlicense',
            'Zlib'
        ] 
    }
];

// function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName,data);
}

// function to initialize program
function init() {
//run questions
    inquirer.prompt(questions).then((data) => {
        writeToFile('./generated/README.md', generateMarkdown(data));
        console.log('README file successfully generated');
    })
    .catch((err) => console.error(err));
}

// function call to initialize program
init();