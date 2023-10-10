// function to create license button and section
function createLicenseInfo(data) {
  if (data.license) {};
}



// function to generate toc
function generateTOC() {
  return `* [Installation](#installation)\n
* [Usage](#usage)\n
* [License](#license)\n
* [Contributing](#contributing)\n
* [Tests](#tests)\n
* [Questions](#questions)\n`;
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
## Description\n
${data.desc}\n
## Table of Contents\n
${generateTOC()}\n
## Installation\n
${data.install}\n
## Usage\n
${data.usage}\n
## License\n
${data.license}\n
## Contributing\n
${data.contribute}\n
## Tests\n
${data.tests}\n
## Questions\n
If you have any questions, please get in touch via [email](mailto:${data.email}) or via [GitHub](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
