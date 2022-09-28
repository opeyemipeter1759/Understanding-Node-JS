// learning Process.
// const process = require('process')
// console.log("hey there", process.argv[2]);

// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
// });

// learning readline

const readline = require ('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let query = " what is your name?\n"

rl.question(query, (answer)=>{
    console.log(`hello ${answer}!`);

    rl.close();
})