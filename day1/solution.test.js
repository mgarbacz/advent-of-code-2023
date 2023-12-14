import day1 from './solution.js';

test('returns correct sum of 56042', async() => {
  const solution = await day1();
  expect(solution).toBe(56042);
})