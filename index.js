const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
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
    ]).then(response => {
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
        ]).then(response => {
            if(response.teamList === "Engineer"){
                promptEngineer();
            } else if(response.teamList === "Intern"){
                promptIntern()
            } else {
                return;
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
        ]).then(response => {
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
        ]).then(response => {
            promptChoice();
        })
}
