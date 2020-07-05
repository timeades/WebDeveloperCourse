const userName = 'Tim';

userName ? console.log(`Hello ${userName}!`) :
    console.log('Hello!');

const userQuestion = 'Will I need an umbrella tomorrow?';

console.log(`${userName} you asked: ` + userQuestion);

const randomNumber = Math.floor(Math.random() * 8);
console.log('my number ' + randomNumber);

let eightBall = randomNumber;

if (randomNumber === 0) {
    eightBall = 'It is certain';
} else if (randomNumber === 1) {
    eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
    eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
    eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
    eightBall = 'Don\'t count on it';
} else if (randomNumber === 5) {
    eightBall = 'My sources say no';
} else if (randomNumber === 6) {
   eightBall = 'Outlook not so good';
} else if (randomNumber === 7) {
    eightBall = 'Signs point to yes';
} else {
    eightBall = 'There has been and error, please ask again';
}

console.log(`The eight ball answered: ${eightBall}`);
