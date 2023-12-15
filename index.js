import day1 from './day1/solution.js';
import day2 from './day2/solution.js';

day1()
  .then(solution => {
    console.log(`Day 1 Solution: ${solution}`);
  })
  .catch(error => {
    console.log('Day 1 Solution encountered an error', error);
  });

day2()
  .then(solutions => {
    const [part1, part2] = solutions;
    console.log(`Day 2, Part 1 Solution: ${part1}`);
    console.log(`Day 2, Part 2 Solution: ${part2}`);
  })
  .catch(error => {
    console.log('Day 2 Solution encountered an error', error);
  });