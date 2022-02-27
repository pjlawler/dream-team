class Employee {
    
    // Class for the overall employees that make up the dream team

    constructor(name, email, id) {
        this.name = name,
        this.email = email,
        this.id = id
    }

    // Returns the desired information

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getTitle() {
        return "Employee";
    }

    getId() {
        return this.id;
    }
}

module.exports = Employee;
