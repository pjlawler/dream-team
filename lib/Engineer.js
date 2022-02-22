Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, email, github) {
        super(name, email);

        this.github = github;
    }
}

module.exports = Engineer;