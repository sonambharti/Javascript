/** 
 * Objects - It is an entity having state and behaviour (properties and method).
 * JS objects have a special property called prototype.
 * We can set our own prototype using "__proto__".
 * i.e. we can hold the reference of another object from an object using __proto__.
*/
const car = require('./classes');
const student = {
    fullName: "Sonam Bharti",
    mark: 76,
    printMarks: function() {
        console.log("Marks = ", this.marks);
    },
};

const employeeTax = {
    calcTax1() {
        console.log("Tax rate is 10%");
    },
    calcTax2: function () { // 2nd method to create function in an object
        console.log("Tax rate for managers is 20%");
    },
}

const newEmp = {
    salary: 5000,
}

// set prototype
newEmp.__proto__ = employeeTax


const newEmp2 = {
    salary: 5000,
    calcTax2: function () {
        console.log("Tax rate for managers is 15%");
    },
}

newEmp2.__proto__ = employeeTax

// Note: If object & prototype have same method, object's method will be used.
newEmp2.calcTax2();

let Toyota = new car();
console.log(Toyota.start("Toyota"));
console.log(Toyota.stop("Toyota"));
