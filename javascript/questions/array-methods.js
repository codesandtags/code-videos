// 19 JavaScript Array Methods
[4, 3, 10, 9].at(-10);       // 10
[4, 3, 10].push(5);          // [4, 3, 10, 5]
[4, 3, 10].pop();            // [4, 3]
[4, 3, 10].shift();          // [3, 10]
[4, 3, 10].unshift(5);       // [5, 4, 3, 10]
[4, 3].concat(5, 2);         // [4, 3, 5, 2]
[4, 3, 10].join('-');        // 4-3-10
[4, 3, 10].slice(1);         // [3, 10]
[4, 3, 10].indexOf(3);       // 1
[4, 3, 10].includes(5);      // false
[4, 3, 10].reverse();        // [10, 3, 4]
[4, 3, 10].map(n => n*2);    // [8, 6, 20]
[4, 3, 10].find(n => n/2 === 5);      // 10
[4, 3, 10].findIndex(n => n/2 === 5); // 2
[4, 3, 10].filter(n => n % 2 === 0);  // [4, 10]
[4, 3, 10].every(n => n > 3);         // false
[4, 3, 10].some(n => n > 3);          // true
[4, 3, 10]// Opera los elementos de izquierda a derecha
.reduce((acc, curr) => acc + curr);      // 17
[4, 3, 10]// Opera los elementos de derecha a derecha
.reduceRight((acc, curr) => acc - curr); // 3

// 💻 Codesandtags 🔥
