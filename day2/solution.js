import readline from 'node:readline';
import fs from 'node:fs';

const day2 = async function() {
  const filePath = new URL('./input.txt', import.meta.url);
  const fileStream = fs.createReadStream(filePath);
  let validGameIdSum = 0;

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  rl.on('line', (line) => {
    validGameIdSum += parseForValidGame(line);
  });

  return new Promise((resolve, reject) => {
    rl.on('close', () => {
      resolve(validGameIdSum);
    });

    rl.on('error', (error) => {
      reject(error);
    });
  });
};

const limits = {
  red: 12,
  green: 13,
  blue: 14,
};

const parseGameId = function(str) {
  const gameIdRegex = /Game (\d+):/;
  const match = str.match(gameIdRegex);
  return match ? parseInt(match[1], 10) : null;
};

const colorTotalsValid = function(str) {
  const colorRegex = /(\d+) (red|green|blue)/g;
  
  let match;
  while ((match = colorRegex.exec(str)) !== null) {
    const count = parseInt(match[1], 10);
    const color = match[2];

    if (count > limits[color]) {
      return false;
    }
  }

  return true;
}

export const parseForValidGame = function(line) {
  if (colorTotalsValid(line)) {
    return parseGameId(line);
  } else {
    return 0;
  }
};

export default day2;