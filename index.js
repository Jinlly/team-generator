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
    return inquirer.prompt([
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
//Engineer
function addEngineer() {
    return inquirer.prompt([
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
    return inquirer.prompt([
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
            name: 'school',
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
//add member
function addMember() {
    return inquirer.prompt([
        {
            type: "list",
            name: "title",
            message: "A new member?",
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


const data = `
<html>
${team.manager}
${team.intern}
${team.engineer}
</html>
`



//final generate
function generate(data) {
    fs.writeFile('./html/html.html', page(team), err => {
        if (err) {
            console.log(err);
        } else {
            console.log('Your team has been created');
        }
    })
}








