const chalk = require("chalk");
const validator = require("validator")
console.log(chalk.blue("hello world"));
const valid = validator.isEmail('foo@bar.com');
console.log( valid ? chalk.green.inverse(valid) : chalk.red.inverse(valid));
const papu = validator.isEmail('sdjskjd@sknsdns');
console.log(papu ? chalk.green.inverse(papu) : chalk.red.inverse(papu));