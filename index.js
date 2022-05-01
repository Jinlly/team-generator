//html generate
const html = require('./html/indexhtml')

//node 
const fs = require('fs')
const inquirer = require("inquirer")

//role cards
const manager = require('./roles/manager')
const engineer = require('./roles/employee')
const intern = require('./roles/intern')

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

const employee = () => {
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

    ])
}