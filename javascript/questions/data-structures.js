// ¿Cuál es la representación de las 
// estructuras de datos en JavaScript?

// Stack = Pila = LIFO
// https://gohighbrow.com/stacks-and-queues/
// https://tenor.com/view/puppy-hand-stack-cute-dog-gif-14338673
const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());

// Queue = Cola = FIFO
const queue = [];
queue.push(1);
queue.push(2);
queue.push(3);

console.log(queue.shift());