// dsc.gg/p33t

//starting stuff
const pw = require('generate-password');
const ps = require('prompt-sync');
const chalk = require('chalk');
const log = console.log;
const generator = require('generate-password');
const prompt = ps();
//

// main process
console.clear();
console.log(chalk.blue('Welcome to the password generator!'));
console.log(chalk.red('------------------------------------'));
let chars = prompt('Enter the number of characters: ');
console.clear();
var password = generator.generate({
    length: chars,
    numbers: true,
    uppercase: true,
    symbols: true,
    excludeSimilarCharacters: true,
})
console.log(chalk.blue(`\n \nYour generated password is: \n ${password}`));

