/*
Conjetura de collatz

La conjetura plantea que cualquier entero > 0

Aplicandole este algoritmo siempre termina en un loop 4, 2, 1

Como es el algoritmo.

let numero = 54554345345
for (;;) {
   // si es par ? entonces dividir x 2
   // si es impar ? entonces aplicar la formula 3n + 1
}

La conjetura plantea que cualquier numero escogido
termina en un bucle 4, 2, 1
*/
let collatz = (inputNumber: number) => {
  if (inputNumber % 2 == 0) {
    let par = inputNumber / 2
    return par
  } else {
    let impar = (inputNumber * 3) + 1
    return impar
  }
}

function conjecture(testNumber: number) {
  let condition = testNumber
  while (condition >= 1) {
    condition = collatz(condition)
    if (condition % 2 == 0) {
      let par = condition / 2
      console.log(par)
    } else {
      let impar = (condition * 3) + 1
      console.log(impar)
    }
  }
  return result
}
let result = conjecture(22)
console.log(conjecture(22))