import readline from 'node:readline';
import fs from 'node:fs';

const day3 = async function() {
  const filePath = new URL('./input.txt', import.meta.url);
  const fileStream = fs.createReadStream(filePath);
  let enginePartSum = 0;

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  rl.on('line', (line) => {
    enginePartSum += parsePartNumbers(line);
  });

  return new Promise((resolve, reject) => {
    rl.on('close', () => {
      resolve(enginePartSum);
    });

    rl.on('error', (error) => {
      reject(error);
    });
  });
};

export const parsePartNumbers = function(line) {
  return 0;
};

export default day3;