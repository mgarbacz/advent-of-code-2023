import * as readline from 'node:readline';
import * as fs from 'node:fs';

const fileStream = fs.createReadStream(new URL('./input.txt', import.meta.url));
let linecount = 0;

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

rl.on('line', (line) => {
  linecount++;
  console.log(line);
});

rl.on('close', () => {
  console.log(linecount);
});
