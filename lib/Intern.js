Employee = require('../lib/Employee');

// Creates the class for the Intern team member by inheriting the Employee class

class Intern extends Employee {
    constructor(name, email, id, school) {
        super(name, email, id);
        this.school = school;
    }

    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;