// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
const init = () => {
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

// TODO: Create an array of questions for user input
// const questions = [];
const promptQuestions = questionsData => {
    console.log(`
  +++++++++++++++++++
  Project Information
  +++++++++++++++++++
  `);

    return inquirer
        .prompt([
          
        ])
        // .then(projectData => {
        //     portfolioData.projects.push(projectData);
        //     if (projectData.confirmAddProject) {
        //         return promptProject(portfolioData);
        //     } else {
        //         return portfolioData;
        //     }
        // });
};


// Function call to initialize app
init()
    .then(promptProject)
    .then(portfolioData => {
       console.log(portfolioData);
        // return generatePage(portfolioData);
    })
    //   .then(pageHTML => {
    //     return writeFile(pageHTML);
    //   })
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


