//Spróbuj zmodyfikować powyższy kod w taki sposób, aby zwracać przeglądarce tekst na temat jej samej.

const http = require('http');

const srv = http.createServer((req, res) => {
  
  const browser = req.headers['user-agent'];
  
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(browser);

});

srv.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});

