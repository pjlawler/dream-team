Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, email, office_number) {
        super(name, email);
        this.office_number = office_number;
    }
}

module.exports = Manager;