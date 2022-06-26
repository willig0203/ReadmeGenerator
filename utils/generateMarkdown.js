// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }


module.exports = data => {

  return `
  # Project Title: ${data.title}
  ## Description: ${data.description}
  ## Installation: ${data.installation}
  ## Program Usage: ${data.usage}
  ## Want to contribute: ${data.contribution}
  ## How to test: ${data.test}
  ## License: ${data.license}
  ## Git user name: ${data.gitUsername}
  ## Email: ${data.email}
`;

};
