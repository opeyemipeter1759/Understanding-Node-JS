//Ssync 

const fs = require( 'fs' )
try {
    const data = fs.readFileSync( 'test.txt' ,'utf8' )
    console.log(data);
} catch (error) {
    console.error(error);
}

console.log( "hello sync" )

// ASync
const fs1 = require( 'fs' );
fs1.readFile( 'test.txt', 'utf8', ( err, data ) =>
{
    if (err) {
        console.error(err)
    }
    console.log(data);
})

console.log("hello Async");
