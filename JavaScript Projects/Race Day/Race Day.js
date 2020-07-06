let raceNumber = Math.floor(Math.random() * 1000);

console.log(raceNumber);

const registeredEarly = true;
const age = 18;

if(registeredEarly === true && age >= 18) {
    raceNumber += 1000;
    console.log(raceNumber)
}

if(registeredEarly === true && age >= 18) {
    console.log(`Runner ${raceNumber}, you will be racing at 9:30 am.`)
} else if(registeredEarly === false && age >= 18) {
    console.log(`Runner ${raceNumber}, late adults run at 11:00 am.`)
} else if(age < 18) {
    console.log(`Runner ${raceNumber}, Youth registrants run at 12:30 pm.`)
} else {
    console.log('Please make your way to the registration desk')
}
