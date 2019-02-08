var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

var newString = chalk.bgGreenBright("This ") + chalk.blue("is ") + chalk.green("me ") + chalk.magentaBright("testing ") + chalk.cyan("chalk");
console.log(newString);
