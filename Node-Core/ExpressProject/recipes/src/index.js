const express = require( "express" )
const path = require( 'path' )

const recipesRouter = require( "./routers/recipes" )

const app = express()



app.use( ( req, res, next ) =>
{
    const { method, path } = req
    console.log( `new request to: ${ method } ${ path } at ${ new Date().toISOString() }` );
    next()
})

app.use('/api/v1/recipies', recipesRouter)


const port = process.env.PORT || 5050

app.listen( port, () =>
{
    console.log(`server is running on port ${port}`);
})