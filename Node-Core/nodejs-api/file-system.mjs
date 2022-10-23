import  {readFile, writeFile}  from 'fs/promises'


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

// const readFile = async( path ) => {
//     try {
//         const content = await fs.readFile( path, "utf-8" );
//         console.log(content);
//     } catch (error) {
//       console.error(error);  
//     }
// }

// readFile( "./test.txt" )

// const writeFile = async ( path, nc ) =>
// {
//     try {
//         const newContent = await fs.writeFile( path, nc )
//         console.log(newContent);
//     } catch (error) {
//         console.error(error);
//     }
// }

// writeFile( "./test.txt", "I am the new content" )


// with Promises

let template = await readFile( new URL( 'template.html', import.meta.url ), 'utf-8' )

const data = {
    title: 'Learn Node',
    body:'this is the final HTML'
}



for ( const [k, v] of Object.entries( data ) )
{
    template = template.replace(`{${k}}`, v)
}
// console.log(template);

await writeFile( new URL( 'new.html', import.meta.url ), template)
