Employee = require('../lib/Employee');

// Creates the class for the Manager team member by inheriting the Employee class

class Manager extends Employee {
    constructor(name, email, id, office_number) {
        super(name, email, id);
        this.office_number = office_number;
    }

    getRole() {
        return "Manager";
    }
    getNumber(){
        return this.office_number;
    }
}


module.exports = Manager;