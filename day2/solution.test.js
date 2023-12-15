import { parseForValidGame } from './solution.js';

test('parses for valid game and returns id if valid, 0 if not', () => {
  expect(parseForValidGame(
    'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'
    )).toBe(1);
  expect(parseForValidGame(
    'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue'
    )).toBe(2);
  expect(parseForValidGame(
    'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red'
    )).toBe(0);
  expect(parseForValidGame(
    'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red'
    )).toBe(0);
  expect(parseForValidGame(
    'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'
    )).toBe(5);
  expect(parseForValidGame(
    'Game 100: 6 blue, 9 green; 3 green, 6 blue; 5 blue, 1 red'
    )).toBe(100);
});