// as the value will stay constant so the const has been used
const kelvin = 293;
// the equation for celcius is the kelvin temp minus 273
const celsius = kelvin - 273;
// this equation to calculate Fahrenheit and let used for the next part of the code
let fahrenheit = celsius * (9/5) + 32;
// this is to round down the value of fahrenheit to a whole number
fahrenheit = Math.floor(fahrenheit);
//lets add the temperature in Newton
let newton = celsius * (33/100);
// this is to round down the value of Newton to a whole number
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${celsius} degrees Celsius.`);
console.log(`The temperature is ${newton} degrees Newton.`);
