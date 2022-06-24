// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
// function init(prompt) {}
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


const promptProject = portfolioData => {
    console.log(`
  ===================
  Project Information
  ===================
  `);

    // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of your project? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('You need to enter a project name!');
                        return false;
                    }
                }
            },
            // {
            //   type: 'input',
            //   name: 'description',
            //   message: 'Provide a description of the project (Required)',
            //   validate: descriptionInput => {
            //     if (descriptionInput) {
            //       return true;
            //     } else {
            //       console.log('You need to enter a project description!');
            //       return false;
            //     }
            //   }
            // },
            // {
            //   type: 'checkbox',
            //   name: 'languages',
            //   message: 'What did you this project with? (Check all that apply)',
            //   choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
            // },
            // {
            //   type: 'input',
            //   name: 'link',
            //   message: 'Enter the GitHub link to your project. (Required)',
            //   validate: linkInput => {
            //     if (linkInput) {
            //       return true;
            //     } else {
            //       console.log('You need to enter a project GitHub link!');
            //       return false;
            //     }
            //   }
            // },
            // {
            //   type: 'confirm',
            //   name: 'feature',
            //   message: 'Would you like to feature this project?',
            //   default: false
            // },

            //adds another project is not needed
            // {
            //     type: 'confirm',
            //     name: 'confirmAddProject',
            //     message: 'Would you like to enter another project?',
            //     default: false
            // }
        ])
        .then(projectData => {
            portfolioData.projects.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject(portfolioData);
            } else {
                return portfolioData;
            }
        });
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


