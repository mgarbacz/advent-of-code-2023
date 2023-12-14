import * as readline from 'node:readline';
import * as fs from 'node:fs';

const fileStream = fs.createReadStream(new URL('./input.txt', import.meta.url));
let calibrationValueSum = 0;

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

rl.on('line', (line) => {
  const digits = line.match(/\d/g);

  if (digits && digits.length > 0) {
    const firstDigit = digits[0];
    const lastDigit = digits[digits.length - 1];
    
    calibrationValueSum += parseInt(firstDigit + lastDigit);
  }
});

rl.on('close', () => {
  console.log(calibrationValueSum);
});
