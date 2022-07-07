// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown.js');

// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// function to initialize app
const init = nameData => {
    console.log(`
    ++++++++++++
    Name of User
    ++++++++++++
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
    ]);
};

// an array of questions for user input
const promptQuestions = questionsData => {
    console.log(`
  +++++++++++++++++++
  Project Information
  +++++++++++++++++++
  `);

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project? (Required)',
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    } else {
                        console.log('You need to enter a project title!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Provide a description of the project (Required)',
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('You need to enter a project description!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Provide intallation instructions for the project (Required)',
                validate: installationInput => {
                    if (installationInput) {
                        return true;
                    } else {
                        console.log('You need to provide installation instructions!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Provide usage instructions for the project (Required)',
                validate: usageInput => {
                    if (usageInput) {
                        return true;
                    } else {
                        console.log('You need to provide usage instructions!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'contribution',
                message: 'Provide contribution guidelines for the project (Required)',
                validate: contributionInput => {
                    if (contributionInput) {
                        return true;
                    } else {
                        console.log('You need to provide contribution guidelines!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'test',
                message: 'Provide test instructions for the project (Required)',
                validate: testInput => {
                    if (testInput) {
                        return true;
                    } else {
                        console.log('You need to provide test instructions!');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'license',
                message: 'What license do you chooce for this project?',
                choices: ['None', 'MIT License', 'GNU GPLv3']
            },
            {
                type: 'input',
                name: 'gitUsername',
                message: 'Enter your GitHub username (Required)',
                validate: usernameInput => {
                    if (usernameInput) {
                        return true;
                    } else {
                        console.log('You need to enter your GitHub user name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter email address. (Required)',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('You need to enter your email address!');
                        return false;
                    }
                }
            }
        ])
};

// writing files
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.MD', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'README.MD File created in dist folder!'
        });
      });
    });
  };

  
// Function call to initialize app
init() // get name from user
    .then(nameData => {
        console.log(nameData);
    })
    .then(promptQuestions) // function to prompt questions
    .then(questionsData => { // function to get questions
        // console.log(questionsData);
        return generatePage(questionsData);
    })
    .then(data => {
        return writeFile(data);
    })
    //   .then(writeFileResponse => {
    //     console.log(writeFileResponse);
    //     return copyFile();
    //   })
    //   .then(copyFileResponse => {
    //     console.log(copyFileResponse);
    //   })
    .catch(err => {
        console.log(err);
    });


