// function to create license button and section
function createLicenseInfo(data) {
  if (data.license) {};
}

// function to create questions section (email and github)

// function to generate toc

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
## Description\n
${data.desc}\n
## Table of Contents\n
TABLE OF CONTENTS GOES HERE\n
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
If you have any questions, please get in touch via email or via github.
`;
}

module.exports = generateMarkdown;
