import fs from 'fs/promises';
import http from 'http';
import path from 'path';
import url from 'url';

const PORT = process.env.PORT;

//Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === 'GET') {
      let filepath;
      if (req.url === '/') {
        filepath = path.join(__dirname, 'public', 'index.html');
      } else if (req.url === '/about') {
        filepath = path.join(__dirname, 'public', 'about.html');
      } else {
        throw new Error('Not Found');
      }

      const data = await fs.readFile(filepath);
      res.setHeader('Content-Type', 'text/html');
      res.write(data);
      res.end();
    } else {
      throw new Error('Method Not Allowed');
    }
  } catch (error) {
    res.writeHead(500, {
      'Content-Type': 'text/plain',
    });
    res.end('Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
