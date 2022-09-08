let obj = {
   nombre: 'javier',
   edad: 45,
   status: 'casado'
}

let {nombre} = obj
let {nombre:nmbre} = obj

console.log(nombre)
console.log(nmbre)

// No solo funciona con objetos, tambien lo vemos en arrays

let [,,,txt1, txt2] = ['hola', 'mundo', 'estoy', 'en', 'clase']

console.log(txt1)
console.log(txt2)

