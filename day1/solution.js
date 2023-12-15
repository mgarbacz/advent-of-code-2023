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
    calibrationValueSum += parseCalibrationValue(line);
  });

  return new Promise((resolve, reject) => {
    rl.on('close', () => {
      resolve(calibrationValueSum);
    });

    rl.on('error', (error) => {
      reject(error);
    });
  });
};

const regex = /\d|(?:one|two|three|four|five|six|seven|eight|nine)/gi;
const digitWords = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9'
};

const parseDigit = function(digit) {
  return digitWords[digit.toLowerCase()] || digit;
};

export const parseCalibrationValue = function(line) {
  const digits = line.match(regex);

  if (digits && digits.length > 0) {
    const firstDigit = parseDigit(digits[0]);
    const lastDigit = parseDigit(digits[digits.length - 1]);

    return parseInt(firstDigit + lastDigit);
  } else {
    return 0;
  }
};

export default day1;