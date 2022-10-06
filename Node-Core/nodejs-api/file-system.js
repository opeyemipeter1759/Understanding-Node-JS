const fs = require( "fs" ).promises


const getStats = async ( path ) =>{
    try
    {
        //pass in the file path
        const stats = await fs.stat( path )
        console.log( stats );
        console.log( `isFile: ${ stats.isFile() }` );
        console.log(`isDirectory: ${stats.isDirectory()}`);
} catch (error) {
    console.error(error);
    }
}

// getStats("./test.txt" )

const readFile = async( path ) => {
    try {
        const content = await fs.readFile( path, "utf-8" );
        console.log(content);
    } catch (error) {
      console.error(error);  
    }
}

readFile("./test.txt");