function fibonacci(number) {
  let fibonacciSequence = [];
  fibonacciSequence[0] = 0;
  fibonacciSequence[1] = 1;

  for (let i = 2; i <= number; i++) {
    fibonacciSequence[i] = fibonacciSequence[i - 2] + fibonacciSequence[i - 1];
  }
  if (fibonacciSequence.find((num) => num === number)) {
    console.log(`O número ${number} pertence ao fibonacci`);
  } else {
    console.log(`O número ${number} não pertence ao fibonacci`);
  }
  console.log(fibonacciSequence);
}

/* Chame a função colocando um numero como parametro para fazer a sequencia de quantos numeros deseja da fibonacci */
fibonacci(
  21
); /* o numero 21 pertence ao fibonacci, sequencia [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711] */
