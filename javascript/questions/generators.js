function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

const generator = generateNumbers();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());


function* infinite() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const showMeMore = infinite(); // "Generator { }"

console.log(showMeMore.next().value); // 0
console.log(showMeMore.next().value); // 1
console.log(showMeMore.next().value); // 2