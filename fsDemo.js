// import fs from 'fs';
import fs from 'fs/promises';

// readFile() - callback
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// readFileSync() - synchronous
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data);

//readFile() - promise
// fs.readFile('./test.txt', 'utf8')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// readFile() - async/await
const readFile = async () => {
  try {
    const data = await fs.readFile('./test.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

// writeFile()
const writeFile = async () => {
  try {
    await fs.writeFile('./test.txt', 'Hello World!', 'utf8');
    console.log('File written successfully');
  } catch (err) {
    console.log(err);
  }
};

// appendFile()
const appendFile = async () => {
  try {
    await fs.appendFile('./test.txt', '\n This is appended text!', 'utf8');
    console.log('Data appended successfully');
  } catch (err) {
    console.log(err);
  }
};

writeFile();
appendFile();
readFile();
