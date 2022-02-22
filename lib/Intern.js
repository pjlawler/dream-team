Employee = require('../lib/Employee');


class Intern extends Employee {
    constructor(name, email, school) {
        super(name, email);
        this.school = school;
    }
}

module.exports = Intern;