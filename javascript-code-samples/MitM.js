// Example vulnerable code with a man-in-the-middle (MITM) attack vulnerability

const https = require('https');
const fs = require('fs');

const options = {
  hostname: 'example.com',
  port: 443,
  path: '/',
  method: 'GET',
  key: fs.readFileSync('client-key.pem'),
  cert: fs.readFileSync('client-cert.pem'),
  ca: [ fs.readFileSync('server-cert.pem') ],
  rejectUnauthorized: true
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);
  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();