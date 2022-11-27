const express = require( "express" )

const app = express()

// route handler to send message to someone

app.get( "/", ( req, res ) =>
{
    res.send("Hello Express Student")
})

const port = process.env.PORT || 5050

app.listen( port, () =>
{
    console.log(`server is running on port ${port}`);
})