// Array and its methods
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // 5
console.log(numbers[0]); // 1
console.log(numbers[1]); // 2
numbers[2] = 6;
console.log(numbers); // [1, 2, 6, 4, 5]

// add elements to array
numbers.push(7)
numbers.push(8)
console.log(numbers); // [1, 2, 6, 4, 5, 7]
numbers.pop()
console.log(numbers)
numbers.toString()
console.log(`${numbers} => ${typeof numbers}`)

// Concat 2 arrays
let numbers2 = [9, 10, 11];
let numbers3 = numbers.concat(numbers2);
console.log(numbers3); // [1, 2, 6, 4, 5 7, 8, 9, 10, 11]

// Unshift array i.e. add elements to the start of the array
numbers2.unshift(21)
console.log(numbers2); // [21, 9, 10, 11]

numbers2.unshift(12, 13)
console.log("numbers2.unshift(12, 13): ", numbers2); // [12, 13, 21, 9, 10, 11]


// Shift array i.e. remove elements from the start of the array
numbers2.shift()
console.log("numbers2.shift() = ", numbers2)

//slice an array - it will not change the original array
let numbers4 = numbers2.slice(1, 4);
console.log("use of slice(), numbers2.slice(1, 4): ", numbers4); // [13, 21, 9]


//  splice an array - it will change the original array via add, delete, remove
//  Syntax of splice() - splice(start-ele, no-ele-to-del, new-ele-to-add)
numbers2.splice(0, 2) // delete elements
console.log("use of splice() to delete, numbers2.splice(0, 2): ", numbers2)

numbers2.splice(0, 0, 12, 13) // add elements
console.log("use of splice() to add (12, 13), numbers2.splice(0, 0, 12, 13): ", numbers2)

numbers2.splice(3, 1, 17) // replace elements
console.log("use of splice() to replace 3rd ele from 17, numbers2.splice(3, 1, 17): ", numbers2)

arr = [98, 78, 56, 65, 90]
arr.sort(function(a, b){return a - b});
console.log("sort an array by using compare function: ", arr);


arr = [98, 78, 56, 65, 90]
arr.sort(function(a, b){return b - a});
console.log("sort an array in reverse by using compare function: ", arr);


let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // changes in given array
console.log(fruits)
fruits.reverse();
console.log("Fruits = ", fruits) // changes in given array

// Examples
let fruitStock = [];
fruits.forEach(el => {
    if (el !== 'Apple'){
        fruitStock.push(el);
    }
});
console.log("fruitStock = ", fruitStock);



