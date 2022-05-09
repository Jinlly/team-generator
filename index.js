//html generate
const html = require('./html/generateHtml')

//node 
const fs = require('fs')
const inquirer = require("inquirer")

//role cards
const manager = require('./roles/manager')
const engineer = require('./roles/engineer')
const intern = require('./roles/intern')
const { generate } = require('rxjs')

//team default 
const team = []

//manager information card

const managerEL = () => {
    return inquirer.prompt([{
                type: 'input',
                nama: 'name',
                message: 'please enter the name of the project manager',
            },
            {
                type: 'input',
                nama: 'ID',
                message: 'please enter the ID number of the project manager',
            },
            {
                type: 'input',
                nama: 'email',
                message: 'please enter the email of the project manager',
            },
            {
                type: 'input',
                nama: 'office',
                message: 'please enter the office unmber of the project manager',
            },
        ])
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new manager(name, id, emial, officeNumber);

            team.push(manager);
            console.log(manager);
        })
};


//employee information cards

const employeeEL = () => {
    console.log(`
    =======!!!=======
    please add the employees to the team
    =======!!!=======
    `);

    return inquirer.prompt([{
                type: 'list',
                name: 'role',
                message: 'please choose the role of the employee',
                choices: ['Engineer', 'intern']
            },
            {
                type: 'input',
                nama: 'name',
                message: 'please enter the name of the employee',
            },
            {
                type: 'input',
                nama: 'ID',
                message: 'please enter the ID number of the employee',
            },
            {
                type: 'input',
                nama: 'email',
                message: 'please enter the email of the employee',
            },
            {
                type: 'input',
                nama: 'github',
                message: 'please enter the github username of the employee',
            },
            {
                type: 'input',
                name: 'school',
                message: "Please enter the intern's school",
                when: (input) => input.role === "Intern",
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to add more team members?',
                default: false
            },
        ])
        //push team array to team
        .then(employeeArray => {
            let { name, id, email, role, github, school, confirmAddEmployee } = employeeArray;
            let employee;

            if (role === "Engineer") {
                employee = new engineer(name, id, email, github);

                console.log(employee);

            } else if (role === "Intern") {
                employee = new intern(name, id, email, school);

                console.log(employee);
            }

            team.push(employee);

            if (confirmAddEmployee) {
                return employeeEL(team);
            } else {
                return team;
            }
        })
};

//generate html page
const html = err => {
    fs.html('./html/index.html', err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your team profile has been created')
        }
    })
};

//concatenate functions
managerEL()
    .then(employeeEL)
    .then(team => {
        return html(team);
    })
    .then(page => {
        return html(page);
    })
    .catch(err => {
        console.log(err)
    })