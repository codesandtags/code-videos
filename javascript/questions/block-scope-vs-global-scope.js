// ¿Qué es el global scope y el block scope? 
for (var n = 0; n < 3; n++) {
  setTimeout(() => {
    console.log(n);
  }, 1000);
}

