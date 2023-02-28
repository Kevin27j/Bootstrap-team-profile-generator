// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name, id, email){
        // Consider adding validation to ensure that user input is in the proper format.
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        // validation to check input name to be non-empty and to be a string
        // (typeof this.name !== 'string') NOT working
        if(this.name === '' || typeof this.name !== 'string'){
            throw new Error('Invalid name');
        }
        return this.name;
    }

    getId(){
        // validation to check if id input is a number and non-empty
        // (typeof this.id !== 'number') NOT working
        if(this.id <= 0 || typeof this.id !== 'number'){
            throw new Error('Invalid Id');
        }
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee';
    }
}

module.exports = Employee;