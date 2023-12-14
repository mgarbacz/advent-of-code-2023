import * as readline from 'node:readline';
import * as fs from 'node:fs';

const fileStream = fs.createReadStream('day1/input.txt');
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
