import readline from 'node:readline';
import fs from 'node:fs';

const day1 = async function() {
  const filePath = new URL('./input.txt', import.meta.url);
  const fileStream = fs.createReadStream(filePath);
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

  return new Promise((resolve, reject) => {
    rl.on('close', () => {
      resolve(calibrationValueSum);
    });

    rl.on('error', (error) => {
      reject(error);
    });
  });
}
export default day1;