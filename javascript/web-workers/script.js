function slowOperation() {
  const worker = new Worker('worker.js');
  worker.addEventListener('message', (event) => {
    console.log('The result is: ', event.data);
  })
}

function fastOperation() {
  console.time('fast');
  console.log('Juaaaazzzzz!! Codes and Tags');
  console.timeEnd('fast');
}

const buttonSlow = document.querySelector('#slow');
const buttonFast = document.querySelector('#fast');

buttonSlow.addEventListener('click', slowOperation);
buttonFast.addEventListener('click', fastOperation);
