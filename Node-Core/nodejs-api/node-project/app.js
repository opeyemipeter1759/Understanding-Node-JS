const { createServer } = require('http');
const url = require('url');
const { readFileSync } = require('fs');

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

const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);

  if (!product.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
  return output;
};

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
  } else if (pathname === '/product') {
    res.end(data);
    // console.log(data);
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
