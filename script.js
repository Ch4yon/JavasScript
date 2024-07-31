let firtsNumber = prompt("Digite o primeiro número: ")
let secondNumber = prompt("Digite o segundo número: ")


firtsNumber = Number(firtsNumber)
secondNumber = Number(secondNumber)

const sum = firtsNumber + secondNumber
const sub = firtsNumber - secondNumber
const multi = firtsNumber * secondNumber
const div = firtsNumber / secondNumber
const restDiv = firtsNumber % secondNumber


alert("A soma é: " + sum)
alert("A subtração é: " + sub)
alert("A multiplicação é: " + multi)
alert("A divisão é: " + div)
alert("O resto da divisão é: " + restDiv)
alert(`A Soma é ${sum % 2 === 0 ? "Par" : "Ímpar"}`)
alert(`Os números são ${firtsNumber === secondNumber ? "iguais" : "diferentes"}`)
