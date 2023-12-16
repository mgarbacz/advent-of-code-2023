import { parsePartNumbers } from './solution.js'

const schematic = [
  "467..114..",
  "...*......",
  "..35..633.",
  "......#...",
  "617*......",
  ".....+.58.",
  "..592.....",
  "......755.",
  "...$.*....",
  ".664.598..",
];

test('parses example engine schematic', () => {
  expect(parsePartNumbers(schematic[0])).toBe(467);
  expect(parsePartNumbers(schematic[1])).toBe(0);
  expect(parsePartNumbers(schematic[2])).toBe(668);
  expect(parsePartNumbers(schematic[3])).toBe(0);
  expect(parsePartNumbers(schematic[4])).toBe(617);
  expect(parsePartNumbers(schematic[5])).toBe(0);
  expect(parsePartNumbers(schematic[8])).toBe(592);
  expect(parsePartNumbers(schematic[6])).toBe(755);
  expect(parsePartNumbers(schematic[7])).toBe(0);
  expect(parsePartNumbers(schematic[9])).toBe(1262);
});