// const http = require('http');
// const server = http.createServer((req,res)=>{
//  if(req.url === '/'){
//     res.end('Welcome to my home page');
//  }
//  if(req.url === '/about'){
//     res.end('My About page');
//  }
//  res.end(`
//  <h1>Ooops ! </h1>
//  <p>We could not find the page </p>
//  <a href="/">Go Back </a>
//  `)
// })
// server.listen(4000)
const http = require('http');
const server = http.createServer((req,res)=>{
 if(req.url == '/'){
   res.end("Welcome to home page");
 }
 else if(req.url == '/about'){
   res.end("This is my about page");
 }
 else{
   res.end("Not Found");
 }
});
 server.listen(5000)