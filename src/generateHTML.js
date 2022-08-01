// create cards
const createManager = function (manager) {
    return `
    <div class="card" style="width: 18rem;">
        <div style="text-align: center;">
            <img class="face" src="../pics/av.jpg" alt="Face!">
        </div>
        <div class="card-body">
            <h5 class="name" style="text-align: center;">${manager.name}></h5>
            <p class="Title"></p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="l1">ID: <a class="id">ID: ${manager.id}</li>
            <li class="l2">Office:${manager.officeNumber}</li>
            <li class="l3">Email:<a href="mailto:${manager.email}">${manager.email}</a></li>
        </ul>
    </div>
    `;
}

const createEngineer = function (engineer) {
    return `
    <div class="card" style="width: 18rem;">
        <div style="text-align: center;">
            <img class="face" src="../pics/av.jpg" alt="Face!">
        </div>
        <div class="card-body">
            <h5 class="name" style="text-align: center;">${engineer.name}></h5>
            <p class="Title"></p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="l1">ID: <a class="id">ID: ${engineer.id}</p></li>
            <li class="l2">Github<a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
            <li class="l3">Email:<a href="mailto:${engineer.email}">${engineer.email}</a></li>
        </ul>
    </div>
    `;
}

const createIntern = function (intern) {
    return `
    <div class="card" style="width: 18rem;">
        <div style="text-align: center;">
            <img class="face" src="../pics/av.jpg" alt="Face!">
        </div>
        <div class="card-body">
            <h5 class="name" style="text-align: center;">${intern.name}></h5>
            <p class="Title"></p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="l1">ID: <a class="id">ID: ${intern.id}</p></li>
            <li class="l2">School:${intern.school}</li>
            <li class="l3">Email:<a href="mailto:${engineer.email}">${engineer.email}</a></li>
        </ul>
    </div>
    `;
}

// give back data

generateHTML = function (data) {

    teamArray = [];

    for (let i = 0; i < data.length; i++) {
        const member = data[i];
        const role = member.getRole();

        if (role === 'Manager') {
            const managerCard = createManager(member);

            teamArray.push(managerCard)
        }

        if (role === 'Engineer') {
            const engineerCard = createEngineer(member);

            teamArray.push(engineerCard)
        }

        if (role === 'Intern') {
            const internCard = createIntern(member);

            teamArray.push(internCard)
        }

    }

    const teamCard = teamArray.join('');

    const generatePage = generateHTMLPage(teamCard);
    return generatePage;
}

//Page gene

const generateHTMLPage = function (teamCard) {
    return `
    <!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./stylesheet.css">
    <script src="../src/generateHTML.js"></script>
    <title>Team manager</title>
</head>

<header style="text-align: center;">
    <h2>Ya! Team!</h2>
</header>

<!--Team Cards-->
<div class="body-container">
    ${teamCard}
</div>

</html>
    
    `
}

module.exports = generateHTML;

