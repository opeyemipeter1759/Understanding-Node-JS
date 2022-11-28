const express = require( "express" )
const path = require('path')
const app = express()



app.use( ( req, res, next ) =>
{
    const { method, path } = req
    console.log( `new request to: ${ method } ${ path } at ${ new Date().toISOString() }` );
    next()
})

const publicDirectoryPath = path.join(__dirname, './public');
app.use(express.static(publicDirectoryPath));

// route handler to send message to someone

app.get( "/", ( req, res ) =>
{
    res.send( "Hello Express Student" )
    // console.log(req);
} )

app.get( "/:name", ( req, res ) =>
{
    res.send( `welcome to Recipes, ${ req.params.name } !` )
})

const port = process.env.PORT || 5050

app.listen( port, () =>
{
    console.log(`server is running on port ${port}`);
})