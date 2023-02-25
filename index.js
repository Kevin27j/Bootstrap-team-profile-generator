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
        // add manager information for starter
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

    })

const promptChoice = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "id",
                message: "Which type of team member would you like to add?",
                choices: ["Engineer",
                    "Intern",
                    "Don' want to add any more team members"]
            }
        ]).then(response => {

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

        })
}
