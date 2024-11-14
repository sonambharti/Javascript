// User guess Game no.
let gameNo = 25
let userNo = prompt("Please guess a game number: ");
console.log(userNo)
console.log(typeof userNo)

while(userNo != gameNo){
    userNo = prompt("You have guessed the wrong no. Guess it again:");
}
console.log("Congratulations you guessed it correct!!!🥰");