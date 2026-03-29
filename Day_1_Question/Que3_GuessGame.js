//Make a user game in which user have to guess correct number

let gameNum = 100;
let userNum = prompt("Guess The Game Number:");

while (userNum != gameNum) {
    userNum = prompt("You entered wrong number.Guess again:");
}
console.log("congratulatins, you entered the right number");