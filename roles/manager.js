//apply employee structure
const employee = require("./employee");

// import manager
class manager extends employee {
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
        return "manager";
    }
}

// to be exported 
module.exports = manager;