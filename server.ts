import got from 'got';
import express = require('express');

const server = express();
server.use('/', (_req: any, _res: any, _next: any) => {});

(async () => {
  await new Promise((resolve, reject) => {
    server.listen(4444, (err: any) => {
      if (err) return reject(err);
      resolve();
    });
  });


  await got('http://127.0.0.1:4444/', {
    headers: {"authorization": "Bearer SOMETHING"},
    timeout: 1000
  });

  console.log('END');
})();
