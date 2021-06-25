const Koa = require('koa');
const path = require('path');
const serve = require('koa-static-server');

const app = new Koa();

app.use(
  serve({
    rootDir: path.resolve(process.env.PWD, 'public'),
    // Works
    // rootPath: '/',
    // Doesn't work
    rootPath: '/my-app',
  })
);

app.listen('3000');

console.log('App live on port 3000');