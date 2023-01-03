// ¿Cuánto estados tiene una promesa?
// ¿Cómo funcionan las Promesas en JavaScript?
const myPromiseForYou = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(`state reject: 🤯 Uppss Sorry!`)
    resolve('state resolve: ✅ Well done!')
  }, 1000);
});

// 3 Estados: Pending, fulfilled, rejected
console.log(myPromiseForYou);

// 3 Funciones principales: then, catch, finally
myPromiseForYou
  .then(value => console.log(value))
  .catch(error => console.log(error))
  .finally(() => {
    console.log('I always run 🏃‍♂️')
  })