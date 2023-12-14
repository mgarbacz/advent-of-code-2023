import day1 from './day1/solution.js';

day1()
  .then(solution => {
    console.log(`Day 1 Solution: ${solution}`);
  })
  .catch(error => {
    console.log('Day 1 Solution encountered an error', error);
  });