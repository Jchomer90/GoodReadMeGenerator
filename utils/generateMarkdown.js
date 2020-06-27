function generateMarkdown(data) {
  let readMe =
`
  # ${data.title}

  ## Description
  ${data.userDescription}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation
  To install necessary dependencies, run the following command:
  
  ${data.userDependencies}

  ## Usage
  
  ${data.userKnow}

  ## License

  This project is licensed under ${data.userLicense}

  ## Contributing

  ${data.userContribute}

  ## Test

  To run tests, run the following command:
  ${data.runTest}

  ## Questions
  If you have any questions about the repository, open an issue or contact me directly at ${data.userEmail}.
  You can find more of my work at ${data.userGitHub}.
  `;
  return readMe;
    // console.log(data);
  }

module.exports = generateMarkdown;

// JSON.stringify(answers, null, 4)
