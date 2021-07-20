// INTERN CLASS
// ---------------------------------------------------------------------------

// Required to Extend From Employee Class
const Employee = require('./employee');

// Creates Intern Class
class Intern extends Employee {
    constructor (internName, internId, internEmail, internSchool) {
        super(internName, internId, internEmail);
        this.school = internSchool;
        this.role ="Intern";
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Intern;