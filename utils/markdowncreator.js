// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
    return `
  # ${response.Title}
  ![license](https://img.shields.io/badge/license-${response.License}-blue)
  ## Description
  ${response.Description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Testing](#testing)
  - [License](#license)
  - [Questions](#questions)
  ## Installation Instructions
  ${response.Installation}
  ### Contributions
  ${response.Contributions}
  ## Testing
  ${response.Tests}
  #### Issues? Concerns?
  ${response.Contact}
  ## License
  All work included in this repo is reserved under the ${response.license} license.
  ## Questions
  For questions, contact me via <a href="mailto:${response.Email}">email</a>.
  Find me on <a href="https://github.com/${response.Github}">GitHub</a>`;
  }
  
  module.exports = generateMarkdown;