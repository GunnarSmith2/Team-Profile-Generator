const Employee = require("./Employee");

// manager constructor extends employee constructor
class manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling employee constructor
        super (name, id, email);

        this.officeNumber = officeNumber;
    }

    // override employee role to Manager
    getRole () {
        return "Manager"
    }
}