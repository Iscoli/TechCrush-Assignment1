// app.js

// Import built-in Node.js module (os)
const os = require("os");

// Import third-party module (chalk)
const chalk = require("chalk");

// Import custom module (calculator)
const calculator = require("./modules/calculator");

// Displaying system information using built-in os module
console.log(chalk.blue("System Information:"));
console.log(chalk.yellow(`Operating System: ${os.platform()}`));
console.log(chalk.yellow(`Architecture: ${os.arch()}`));
console.log(chalk.yellow(`Total Memory: ${os.totalmem() / (1024 * 1024)} MB`));
console.log(chalk.yellow(`Free Memory: ${os.freemem() / (1024 * 1024)} MB`));
console.log("--------------------------------------------");

// Using the custom calculator module for arithmetic operations
const a = 20;
const b = 10;

console.log(chalk.green(`Addition: ${a} + ${b} = ${calculator.add(a, b)}`));
console.log(
  chalk.green(`Subtraction: ${a} - ${b} = ${calculator.subtract(a, b)}`)
);
console.log(
  chalk.green(`Multiplication: ${a} * ${b} = ${calculator.multiply(a, b)}`)
);
console.log(chalk.green(`Division: ${a} / ${b} = ${calculator.divide(a, b)}`));
