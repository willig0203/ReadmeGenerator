// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   // console.log("Generating Markdown");
//   // console.log(data);
//   return `
//   # ${data.title}
//   # ${data.description}
//   # ${data.installation}
//   # ${data.usage}
//   # ${data.contribution}
//   # ${data.test}
//   # ${data.license}
//   # ${data.gitUsername}
//   # ${data.email}
// `;
// }

module.exports = data => {

  return `
  test md text for fileContent

  # ${data.title}
  # ${data.description}
  # ${data.installation}
  # ${data.usage}
  # ${data.contribution}
  # ${data.test}
  # ${data.license}
  # ${data.gitUsername}
  # ${data.email}
`;

};


// module.exports = generateMarkdown;
