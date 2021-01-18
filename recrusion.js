const numbers = [
  [1, 2, 3, 4],
  [3, 6, [5, 6], 8, 2, [2, 4], 9],
  [4, 2, [6, 7, [2, 6, 1]]],
];

function sumarr(numbers) {
  let n = numbers.flat(3);
  if (n.length === 0) return 0;
  //console.log(n[0]);
  //console.log(n.slice(0, 1));
  return n[0] + sumarr(n.slice(1));
}

console.log(`The sum is ${sumarr(numbers)}`);
