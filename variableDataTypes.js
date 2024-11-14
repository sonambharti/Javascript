// Variables .........

fullName = "Sonam Bharti"
console.log("fullName : ", fullName)

DOB = 1999
console.log("she was born in the year " + DOB)

year = 1999.5
console.log("The price of her shoes is " + year)

a = null
console.log("null data type variable: " + typeof(a))

y = undefined
console.log("undefined data type variable: " + y)

flag = false
console.log("Boolean type variable: " + flag)




// Data Types...

// var can not be redeclared but updated, and available to global scope
var age = 25
console.log("age : ", age)
var age = 29
console.log("age : ", age)

// let can not be redeclared but updated
let price = 25
console.log("price : ", price)
// let age = 29 // will throw an error due to re-declaration
// console.log("age : ", age) 
price = 29
console.log("price : ", price)


let time = 234567
time = BigInt(time)
console.log("time : ", time)
console.log("typeof time : ", typeof(time))

// Non - Primitive Data type
const person = {
    name : "Sonam Bharti",
    cgpa : 8.25,
    address : {
        city : "Patna",
        state : "Bihar"
    }
}
console.log("persona marks = ", person.cgpa)

console.log("persona marks = ", person["cgpa"]) // different types to access the key-value pair

//  Here keys of object in keys can be updated
person["cgpa"] = 8.5
console.log("persona marks = ", person["cgpa"])