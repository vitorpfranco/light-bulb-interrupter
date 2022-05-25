//#region Exercício 1
var num = parseInt(prompt('digite quantos números:'))
var array = []
for (let i = 0; i < num; i++) {
  array[i] = parseFloat(prompt(`Digite o ${i + 1}° número:`))
}
let soma = array.reduce((a, b) => a + b)
let media = soma / array.length
let potencia = array.map(element => element ** 2)
let quadrada = array.map(element => element ** 0.5)
let cubica = array.map(element => element ** (1 / 3))

document.write(`<strong>Soma total = ${soma} </strong><br>`)
document.write(`<strong>Média total= ${media}</strong><br>`)
for (let i = 0; i < num; i++) {
  document.write(`<strong>Número ${array[i]}:</strong><br>`)
  document.write(`${array[i]}² = ${potencia[i].toFixed(2)}<br>`)
  document.write(`Raiz quadrada de ${array[i]}= ${quadrada[i].toFixed(2)}<br>`)
  document.write(`Raiz cubica de ${array[i]} = ${cubica[i].toFixed(2)}<br>`)
}
//#endregion

//#region Exercício 2
var text = prompt('Digite um texto')
var split = text.split('')
document.write(`MAIÚSCULO ${text.toUpperCase()}<br>`)
document.write(`minúsculo ${text.toLowerCase()}<br>`)
document.write(`Soletrando:<br>`)
for (i in split) {
  document.write(`${split[i]} <br>`)
}
//#endregion

//#region Exercício 3
var strbinario = prompt('Digite o número binário')
var binario = strbinario.split('').map(element => Number(element))
binario = binario.reverse()
var decimal = 0
for (let i in binario) {
  decimal += 2 ** [i] * binario[i]
}

document.write(`O valor digitado em binário é = ${strbinario} <br>`)
document.write(`O valor em decimal é = ${decimal}`)
//#endregion
