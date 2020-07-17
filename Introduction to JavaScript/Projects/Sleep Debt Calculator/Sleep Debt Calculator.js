// Sleep for each day of the week
const getSleepHours = day => {
    switch (day) {
        case 'Monday':
            return 7.5;
        case 'Tuesday':
            return 7.5;
        case 'Wednesday':
            return 7.5;
        case 'Thursday':
            return 7.5;
        case 'Friday':
            return 7.5;
        case 'Saturday':
            return 7.5;
        case 'Sunday':
            return 7.5;
         default:
             return 'Error!'
    }
};
// Function to add actual hours of sleep
const getActualSleepHours = () =>
    getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday');

// Function for ideal hours of sleep a week
const getIdealSleepHours = () => {
    const idealHours = 7.5;
    return idealHours * 7;
};
//CCheck output of the getActualSleepHours() & getIdealSleepHours() functions
console.log(getActualSleepHours());
console.log(getIdealSleepHours());

// Function to calculate if there is a deficit, too much or perfect hours slept
const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours();
};

//Output to user how their weeks sleep has been
calculateSleepDebt();

if (actualSleepHours === idealSleepHours) {
    console.log("You got the ideal amount of sleep");
} else {
    if (actualSleepHours > idealSleepHours) {
        console.log("You got too much sleep");
    }
    console.log("You didn't get enough sleep");
}

