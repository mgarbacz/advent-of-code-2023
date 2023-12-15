import { parseForValidGame, parseGamePower } from './solution.js';

const games = [
  'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
  'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
  'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
  'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
  'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
  'Game 100: 6 blue, 9 green; 3 green, 6 blue; 5 blue, 1 red',
];

test('parses for valid game and returns id if valid, 0 if not', () => {
  expect(parseForValidGame(games[0])).toBe(1);
  expect(parseForValidGame(games[1])).toBe(2);
  expect(parseForValidGame(games[2])).toBe(0);
  expect(parseForValidGame(games[3])).toBe(0);
  expect(parseForValidGame(games[4])).toBe(5);
  expect(parseForValidGame(games[5])).toBe(100);
});

test('parses for power of minimum set of cubes', () => {
  expect(parseGamePower(games[0])).toBe(48);
  expect(parseGamePower(games[1])).toBe(12);
  expect(parseGamePower(games[2])).toBe(1560);
  expect(parseGamePower(games[3])).toBe(630);
  expect(parseGamePower(games[4])).toBe(36);
  expect(parseGamePower(games[5])).toBe(54);
});