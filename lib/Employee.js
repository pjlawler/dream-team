class Employee {
    
    // Class for the overall employees that make up the dream team

    constructor(name, email, id, title = "Employee") {
        this.name = name,
        this.email = email,
        this.id = id,
        this.title = title

    }

    // Returns the desired information

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getTitle() {
        return this.title;
    }

    getId() {
        return this.id;
    }
}

module.exports = Employee;
