// Stwórz back-end, który wyświetli w przeglądarce użytkownika po wejściu np. na localhost:3000 napis Hello, World from back-end!.

const http = require('http');

const srv = http.createServer((req, res) => {
  
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end('Hello, World from back-end!');

});

srv.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});

