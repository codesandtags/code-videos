// 3 Funciones principales: then, catch, finally
myPromiseForYou
  .then(value => console.log(value))
  .catch(error => console.log(error))
  .finally(() => {
    console.log('I always run 🏃‍♂️')
  })