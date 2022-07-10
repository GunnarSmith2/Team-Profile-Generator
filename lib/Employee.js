//employee constructor
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    // returning name for input
    getName() {
        return this.name;
    }

    //returning id for input
    getId() {
        return this.id;
    }

    // returning email for input
    getEmail() {
        return this.email;
    }

    // returning employee
    getRole() {
        return 'Employee';
    }
};

// to be exported
module.exports = Employee;