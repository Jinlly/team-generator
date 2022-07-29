const fs = require('fs');
const inquirer = require('inquirer');

const page = require('./src/generateHTML');

//teamCards
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//array
const team = [];

//start
start();
function start() {
    addManager();
}
//add manager
function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of the manager?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the manager?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number of the manager?',
        },
    ]).then((neww) => {
        const manager = new Manager(
            neww.name,
            neww.id,
            neww.email,
            neww.officeNumber
        );
        team.push(manager);
        console.log(manager);
        addMember();
    });
};
//add member
function addMember() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "title",
                message: "which title belongs to the new member",
                choices: ["Engineer", "Intern", "Manager", "How about NO"],
            },
        ])
        .then((neww) => {
            if (neww.title === "Engineer") {
                addEngineer();
            } else if (neww.title === "Intern") {
                addIntern()
            } else if (neww.title === "Manager") {
                addManager();
            } else {
                generate();
            }
        });
}
//Engineer
function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Engineer?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of the Engineer?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the Engineer?',
        },
        {
            type: 'input',
            name: 'Github Name',
            message: 'What is the office number of the Engineer?',
        },
    ]).then((neww) => {
        const engineer = new Engineer(
            neww.name,
            neww.id,
            neww.email,
            neww.github
        );
        team.push(engineer);
        console.log(engineer);
        addMember();
    });
};
//intern
function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Intern?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of the Intern?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the Intern?',
        },
        {
            type: 'input',
            name: 'Github Name',
            message: 'What is the school of the Intern?',
        },
    ]).then((neww) => {
        const intern = new Intern(
            neww.name,
            neww.id,
            neww.email,
            neww.github
        );
        team.push(intern);
        console.log(intern);
        addMember();
    });
};

//final generate
function generate() {
    fs.writeFile('./html.lndex.html', data, err => {

        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your team has been created');
            return page(team)
        }
    })
}



