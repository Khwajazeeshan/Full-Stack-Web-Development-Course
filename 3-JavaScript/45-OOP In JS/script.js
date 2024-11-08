console.log('\n\t\t ****** OOP In JS ****** \n\n');

class parent {
    constructor(name) {
        this.name = name
        console.log('parent class is created')
    }
    manager() {
        console.log('Manager salary is 3M$')
    }
}

class child extends parent {
    constructor(name) {
        super(name)
        this.name = name
        console.log('child class is created')
    }
    employee() {
        console.log('Employee Salary is 1M$')
    }
}

let a = new parent("zeeshan")
console.log(a)
let b = new child("harry")
console.log(b)

console.log('\n\n get and set in OOP \n\n');


class User {

    constructor(name) {
        // invokes the setter
        this.name = name;
        console.log('User class is created');
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 2) {
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }
}

let user = new User("John");
console.log(user.name); // John
user.name = "Zeeshan" // Name is too short.
console.log(user.name)

// instanceof keyword is used to check thath which class is created from another class......
// Run this code in console........
/*
a instanceof parent
true ---->
b instanceof parent
true ---->
a instanceof child
false ---->
b instanceof child
true ---->
*/