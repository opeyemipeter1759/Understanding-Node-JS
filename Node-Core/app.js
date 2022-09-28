// learning Process.
// const process = require('process')
// console.log("hey there", process.argv[2]);

// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
// });

// learning readline

const { trace } = require('console');
const readline = require ('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let query = " what is your name?\n"

rl.question(query, (answer)=>{
    // console.log(`hello ${answer}!`);

    rl.close();
})


// console.trace 

var smallFunct = function () {
    // console.trace("let us  look at trace");
}

var bigFunct = function () {
    smallFunct();
}

bigFunct();


const fs = require('fs');
const { Console } = require('console');
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
const logger = new Console({ stdout: output, stderr: errorOutput });
const number = 5;
logger.log('number:', number);
// In stdout.log: number 5
const code = 9
logger.error('error code:', code);