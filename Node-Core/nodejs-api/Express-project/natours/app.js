const express = require('express');
const app = express();

app.get( '/', ( req, res ) =>
{
    res.send( 'hello from the server side' )
});

const port = 5000;
app.listen(port, () => {
  console.log(`app running on ${port}...`);
});
