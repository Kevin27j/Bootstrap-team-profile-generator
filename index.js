const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
// The node:path module provides utilities for working with file and directory paths.
const path = require("path");
const fs = require("fs");

// path.resolve() creates a new absolute path for the "output" directory
const OUTPUT_DIR = path.resolve(__dirname, "output");
// path.join() attaches a new file "team.html" to the previous path
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
console.log("Please build your team");

// Array to pass with team objects to render()
const employees = [];

// Start program by prompting Manager information 
inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the team manager's name?"
        },
        {
            type: "number",
            name: "id",
            message: "What is the team manager's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the team manager's email?",
            // use validate method to check email input is correct
            // source: https://stackoverflow.com/questions/65189877/how-can-i-validate-that-a-user-input-their-email-when-using-inquirer-npm
            validate: function (email) {
                // Regex mail check (return true if valid mail)
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
            }
        },
        {
            type: "number",
            name: "officeNum",
            message: "What is the team manager's office number?"
        }
    ]).then(answers => {
        // Populate manager 
        // Create new object from Manager Class
        const manager = new Manager(
            // Use this function to capitalize first letter of each word in name input
            stringCapitalize(answers.name),
            answers.id,
            answers.email,
            answers.officeNum
        );

        // Push new object information to employees array
        employees.push(manager);
        promptChoice();
    })

// Prompt user to pick another employee or exit the program
const promptChoice = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "teamList",
                message: "Which type of team member would you like to add?",
                choices: ["Engineer",
                    "Intern",
                    "Don't want to add any more team members"]
            }
        ]).then(answers => {
            // call new prompt based on list choice
            if (answers.teamList === "Engineer") {
                promptEngineer();
            } else if (answers.teamList === "Intern") {
                promptIntern()
            } else {
                // When a user decides to finish building their team, 
                // they exit the application and the HTML is generated.
                buildPage();
            }
        })
}

const promptEngineer = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is your engineer's name?"
            },
            {
                type: "number",
                name: "id",
                message: "What is your engineer's id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your engineer's email?",
                validate: function (email) {
                    // Regex mail check (return true if valid mail)
                    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                }
            },
            {
                type: "input",
                name: "github",
                message: "What is your engineer's GitHub username?"
            },
        ]).then(answers => {
            // add new engineer to employees array
            const engineer = new Engineer(
                stringCapitalize(answers.name),
                answers.id,
                answers.email,
                answers.github
            );
            employees.push(engineer);

            promptChoice();
        })
}

const promptIntern = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is your intern's name?"
            },
            {
                type: "number",
                name: "id",
                message: "What is your intern's id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your intern's email?",
                validate: function (email) {
                    // Regex mail check (return true if valid mail)
                    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                }
            },
            {
                type: "input",
                name: "school",
                message: "What is your intern's school?"
            },
        ]).then(answers => {
            // add new intern to employees array
            const intern = new Intern(
                stringCapitalize(answers.name),
                answers.id,
                answers.email,
                answers.school
            );
            employees.push(intern);

            promptChoice();
        })
}

// Function to capitalize first letter of each word 
// source: https://stackoverflow.com/questions/32589197/how-can-i-capitalize-the-first-letter-of-each-word-in-a-string-using-javascript
const stringCapitalize = (str) => {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

const buildPage = () => {
    // Build HTML page with employees info
    fs.writeFile(outputPath, render(employees), (err) =>
        err ? console.error(err) : console.log('success'));
}