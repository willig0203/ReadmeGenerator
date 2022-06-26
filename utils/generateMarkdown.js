// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (license !== "None") {
    return "[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }


module.exports = data => {

  return `
# license badge: ${renderLicenseBadge(data.license)}
  # Project Title: ${data.title}
  ## Description: ${data.description}
  ## Installation: ${data.installation}
  ## Usage: ${data.usage}
  ## Want to contribute: ${data.contribution}
  ## Testing: ${data.test}
  ## License:  ${data.license}
  ## Git Username: ${data.gitUsername}
  ## Email: ${data.email}
`;

};
