// for Loop

for(i = 0; i<5; i++){
    console.log(i);
}

// Calculate Sum of 1 to 100
sum = 0
for(let i = 0; i<100; i++){
    sum += i;
}
console.log("Sum from 1 to 100 = ", sum);

// while loop
console.log("Checking while loop...")
let j = 0;
while(j<5){
    console.log(j);
    j++;
}

// do while loop
console.log("Checking do while loop...")
let k = 0;
do{
    console.log(k);
    k++;
}while(k<5)

// for-of loop
let fruits = ["apple", "banana", "cherry"];
for(let fruit of fruits){
    console.log(fruit);
}
// for-in loop
let person = {name: "John", age: 30};
for(let key in person){
    console.log(key, person[key]);
}  // Output: name John, age 30

// for-of loop with strings
let str = "Hello";
for(let char of str){
    console.log(char);
}  // Output: H, e, l, l, o

// for-in loop in strings
let str2 = "Hello";
for(let key in str2){
    console.log(key, str2[key]);
}  // Output: 0 H, 1 e, 2 l, 3 l
// Note: for-in loop in strings returns the index of each character, not the character itself.

// String Methods
let str3 = "Hello, World!";
console.log(str3.length); // Returns the length of the string
console.log(str3.toUpperCase()); // Returns the string in uppercase
console.log(str3.toLowerCase()); // Returns the string in lowercase
console.log(str3.trim()); // Returns the string with leading and trailing whitespace removed
console.log(str3.concat(" I am here")); // Concatenate 2 strings
console.log(str3.replace("World", "Universe")); // Returns the string with the specified value replaced
console.log(str3.split(", ")); // Returns an array of substrings
console.log(str3.substring(7, 12)); // Returns the characters in a specified range
console.log(str3.slice(1, 7)); // Returns the characters in a specified range i.e. slicing a string
console.log("Index of the first occurrence of the specified value: ", str.indexOf("World")); // Returns the index of the first occurrence of the specified value
console.log("character at index given of the string is: ", str.charAt(4)); // Returns the character at index given of the string

// Template Literals
let Jname = `John is a smart boy.`;
console.log(typeof Jname);

obj = {
    name: "John",
    age: 30,
}
output = `${obj.name} is a smart boy of age ${obj.age}.`
console.log(output)


// Switch - case

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  console.log(day);