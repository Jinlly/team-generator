//apply employee structure
const employee = require("./employee");

// import interns
class intern extends employee {
    constructor(name, id, email, school) {
        // calling employee constructor 
        super(name, id, email);

        this.school = school;
    }

    // returning github from input 
    getSchool() {
        return this.school;
    }

    // override employee role to intern
    getRole() {
        return "intern";
    }
}

// to be exported 
module.exports = intern;