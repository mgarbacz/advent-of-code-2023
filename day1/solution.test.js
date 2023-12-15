import { parseCalibrationValue } from './solution.js';

test('parses pure digit examples', () => {
  expect(parseCalibrationValue('1abc2')).toBe(12);
  expect(parseCalibrationValue('pqr3stu8vwx')).toBe(38);
  expect(parseCalibrationValue('a1b2c3d4e5f')).toBe(15);
  expect(parseCalibrationValue('treb7uchet')).toBe(77);
});

test('parses digit and word digit examples', () => {
  expect(parseCalibrationValue('two1nine')).toBe(29);
  expect(parseCalibrationValue('eightwothree')).toBe(83);
  expect(parseCalibrationValue('abcone2threexyz')).toBe(13);
  expect(parseCalibrationValue('xtwone3four')).toBe(24);
  expect(parseCalibrationValue('4nineeightseven2')).toBe(42);
  expect(parseCalibrationValue('zoneight234')).toBe(14);
  expect(parseCalibrationValue('7pqrstsixteen')).toBe(76);
});

test('parses tricky smashed word digit examples', () => {
  expect(parseCalibrationValue('eighthree')).toBe(83);
  expect(parseCalibrationValue('sevenine')).toBe(79);
});