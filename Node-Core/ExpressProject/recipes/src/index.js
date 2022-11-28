const express = require( "express" )
const path = require('path')
const app = express()

// route handler to send message to someone

app.get( "/", ( req, res ) =>
{
    res.send( "Hello Express Student" )
    // console.log(req);
} )

app.get( "/:name", ( req, res ) =>
{
    res.send( `welcome to Recipes${ req.params.name }` )
    console.log(req.params);
})

const port = process.env.PORT || 5050

app.listen( port, () =>
{
    console.log(`server is running on port ${port}`);
})