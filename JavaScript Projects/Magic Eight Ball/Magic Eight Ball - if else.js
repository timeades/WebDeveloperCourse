const userName = 'Tim';

userName ? console.log(`Hello ${userName}!`) :
    console.log('Hello!');

const userQuestion = 'Will I need an umberella tomorrow?';

console.log(`${userName} you asked: ` + userQuestion);

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

if (randomNumber === 0) {
    console.log('It is certain');
} else if (randomNumber === 1) {
    console.log('It is decidedly so');
} else if (randomNumber === 2) {
    console.log('Reply hazy try again');
} else if (randomNumber === 3) {
    console.log('Cannot predict now');
} else if (randomNumber === 4) {
    console.log('Don\'t count on it');
} else if (randomNumber === 5) {
    console.log('My sources say no');
} else if (randomNumber === 6) {
    console.log('Outlook not so good');
} else if (randomNumber === 7) {
    console.log('Signs point to yes');
} else {
    console.log('There has been and error, please ask again');
}

console.log(`The eight ball answered: ${eightBall}`);
