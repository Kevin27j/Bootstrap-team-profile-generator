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

inquirer
    .prompt([
        // start programm by prompting manager information 
        {
            type: "input",
            name: "name",
            message: "What is the team manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the team manager's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the team manager's email?"
        },
        {
            type: "input",
            name: "officeNum",
            message: "What is the team manager's office number?"
        }
    ]).then(answers => {
        // Populate manager 
        // create object
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
        console.log(manager);
        
        promptChoice();
    })

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
                // Else build HTML page
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
                type: "input",
                name: "id",
                message: "What is your engineer's id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your engineer's email?"
            },
            {
                type: "input",
                name: "github",
                message: "What is your engineer's GitHub username?"
            },
        ]).then(answers => {
            // add new engineer to employees array
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
                type: "input",
                name: "id",
                message: "What is your intern's id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your intern's email?"
            },
            {
                type: "input",
                name: "github",
                message: "What is your intern's School?"
            },
        ]).then(answers => {
            // add new intern to employees array
            promptChoice();
        })
}

const buildPage = () => {

}