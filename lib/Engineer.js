Employee = require('../lib/Employee');

// Creates the class for the Engineer team member by inheriting the Employee class

class Engineer extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id, "Engineer");

        this.github = github;
    }

    getGitHub() {
        return this.github;
    };
}

module.exports = Engineer;