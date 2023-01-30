console.time('slow');
const max = 50000000;
let sum = 0;

for(let n = 0; n < max; n++) {
  sum += n;
}

postMessage(sum);

console.log(`Slow operation, finished. Max: ${max}`);
console.timeEnd('slow');