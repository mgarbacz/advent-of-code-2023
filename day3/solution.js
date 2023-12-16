import readline from 'node:readline';
import fs from 'node:fs';

const day3 = async function() {
  const filePath = new URL('./input.txt', import.meta.url);
  const fileStream = fs.createReadStream(filePath);
  let enginePartSum = 0;
  let gearRatioSum = 0;
  let prevLine = '';
  let prevPrevLine = '';

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  rl.on('line', (line) => {
    // Since we are reading line by line, we need to keep track of the two
    // previous lines to compare all around the digits for symbols
    enginePartSum += parsePartNumbers(line, prevLine, prevPrevLine);
    gearRatioSum += parseGearRatio(line, prevLine, prevPrevLine);
    prevPrevLine = prevLine;
    prevLine = line;
  });

  return new Promise((resolve, reject) => {
    rl.on('close', () => {
      // need to parse that last line still
      enginePartSum += parsePartNumbers('', prevLine, prevPrevLine);
      gearRatioSum += parseGearRatio('', prevLine, prevPrevLine);
      resolve([enginePartSum, gearRatioSum]);
    });

    rl.on('error', (error) => {
      reject(error);
    });
  });
};

const containsSymbols = function(str) {
  const symbolRegex = /[#$%&*+\-/=@]/;
  return symbolRegex.exec(str) !== null ? true : false;
};

export const parsePartNumbers = function(nextLine, line, prevLine) {
  const digitRegex = /\d+/g;
  let lineTotal = 0;

  let match;
  while ((match = digitRegex.exec(line)) !== null) {
    // Symbols can be anywhere around the digits, including diagonals, so we
    // will be checking from the matching index - 1 (before) all the way to the
    // matching index + match length (after) within the bounds of the string
    const before = (match.index - 1 > 0) ? match.index - 1 : 0;
    const after = (match.index + match[0].length < line.length) ? 
      match.index + match[0].length : line.length;
    const beforeCheck = line[before];
    const afterCheck = line[after];
    const prevCheck = prevLine.substring(before, after + 1);
    const nextCheck = nextLine.substring(before, after + 1);

    if (containsSymbols(beforeCheck + afterCheck + prevCheck + nextCheck)) {
      lineTotal += parseInt(match[0], 10);
    }
  }

  return lineTotal;
};

const containsDigits = function(str) {
  const digitRegex = /\d+/;
  return digitRegex.exec(str) !== null;
};

export const parseGearRatio = function(line) {
  return 0;
};

export default day3;