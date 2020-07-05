// setting the variable myAge with an age (number)
const myAge = 54;
//because the value will change Using let
let earlyYears = 2;
earlyYears *= 10.5;
//adding a variable named laterYears, again using let as the value will change
let laterYears = myAge - 2;
laterYears *= 4;
//could use laterYears = laterYears * 4; instead of shortened line above, the same for earlyYears

// adding the values of 2 varibles and assiging that value to a new variable
const myAgeInDogYears = earlyYears + laterYears;
// this line changes the string to all lower case
const myName = 'Tim'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
