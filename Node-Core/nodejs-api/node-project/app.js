const { createServer } = require('http');
const url = require('url');
const { readFileSync } = require( 'fs' );
const replaceTemplate = require( './modules/replaceTemplate' );

const tempOverview = readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
);
const tempCard = readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);
const tempProduct = readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8'
);



const data = readFileSync('./dev-data/data.json', 'utf-8');
const dataObj = JSON.parse(data);

const server = createServer((req, res) => {
  console.log(req.url);
  const { query, pathname } = url.parse(req.url, true);

  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output);
  } else if ( pathname === '/product' )
  {
      res.writeHead( 200, { 'Content-type': 'text/html' } );
      const product = dataObj[query.id]
      const output = replaceTemplate(tempProduct, product)
    res.end(output);
    console.log(product);
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
    });
    res.end('<h1>page not found</h1>');
  }
});

server.listen(4000, '127.0.0.1', () => {
  console.log('listening to port 4000');
});
