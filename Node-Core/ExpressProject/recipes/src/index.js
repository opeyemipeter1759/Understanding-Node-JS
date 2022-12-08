const express = require( "express" )
const path = require( 'path' )
const cors = require("cors");


const recipesRouter = require( "./routers/recipes" )
const {handleError} = require ("./utils/error")

const app = express()

app.use(cors());


app.use( ( req, res, next ) =>
{
    const { method, path } = req
    console.log( `new request to: ${ method } ${ path } at ${ new Date().toISOString() }` );
    next()
} )

app.use(express.json());
app.use( express.urlencoded( { extended: true } ) );

app.get( "/", ( req, res ) =>
{
    res.redirect("/api/v1/recipes")
})

app.use('/api/v1/recipes', recipesRouter)

app.use(handleError)

const port = process.env.PORT || 5050

app.listen( port, () =>
{
    console.log(`server is running on port ${port}`);
})