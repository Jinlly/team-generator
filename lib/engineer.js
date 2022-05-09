//apply employee structure
const employee = require("./employee");

// import engineers
class engineer extends employee {
    constructor(name, id, email, github) {
        // calling employee constructor 
        super(name, id, email);

        this.github = github;
    }

    // returning github from input 
    getGithub() {
        return this.github;
    }

    // override employee role to engineer
    getRole() {
        return "engineer";
    }
}

// to be exported 
module.exports = engineer;