//Ssync 

const fs = require( 'fs' )
try {
    const data = fs.readFileSync( 'test.txt', 'utf8' );
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

console.log( "hello Async" );


// writing to a file 
let content = " I am writing into a this text file from Node js using fs modules"

fs.writeFile( "test.txt", content, ( err ) =>
{
    if ( err )
    {
        console.error(err);
    }
    console.log("file written");
} )

fs.readFile( 'test.txt', 'utf8', ( err, data ) =>
{
    if (err) {
        console.error(err)
    }
    console.log(data);
})
