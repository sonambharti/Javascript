// Basic Java script Function to add 2 nos
function add(num1, num2) { // input - parameters
    return num1 + num2;
}
console.log("Addition of 2 nos.: ", add(2, 3)) // passing arguments

// arrow function
const add2 = (num1, num2) => {
    return num1 + num2;
}
console.log("Addition of 2 nos. using arrow function: ", add2(4, 3)) 

/*
Methods - a function which are associated/bind with a data structure....
Methods are used to perform operations on data structures like arrays, objects etc.

Higher Order Functions/Methods - The functions which take another function as parameters or returns a functions...
*/

// 1. foeEach() methods
arr = [1, 2, 3]
console.log(`array ${arr} we need to traverse using forEach().`)
arr.forEach(function (value, index, arr) {
    console.log(value, index, arr)
    })

console.log(`The square of arr ${arr} ele using forEach().`)
arr.forEach(function (val) {
    console.log(val**2)
})

// 2. map() method
console.log(`The square of arr ${arr} ele using map().`)
let arr2 = arr.map(function (val) {
    return val**2
})
console.log(arr2)

// map() returns a new array
console.log(`The square of arr ${arr} ele using map().`)
let arr3 = arr.map(val => val**2)
console.log(...arr3) // spread - operator

// 3. filter() methods for an array
console.log(`The even numbers in arr [${arr}] ele using filter().`)
let arr4 = arr.filter(val => val % 2 == 0)
console.log(arr4)

// 4. reduce() method for an array
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial); // Expected output: 10


// fiind largest no. using reduce()

const largest = array1.reduce((prev, curr) => {
    return (prev > curr) ? prev : curr
});
console.log("The largest no in the given array is: ", largest) // 4
