const result = document.getElementById('result')
const numberInput1 = document.getElementById('numberInput1')
const numberInput2 = document.getElementById('numberInput2')

function sumar(num1, num2) {
    return num1 + num2
}

function restar(num1, num2) {
    return num1 - num2
}

function multiplicar(num1, num2) {
    return num1 * num2
}

function dividir(num1, num2) {
    return num1 / num2
}

function sum() {
    const num1 = +numberInput1.value
    const num2 = +numberInput2.value
    const numberSuma = sumar(num1, num2)
    result.innerText = numberSuma
}

function rest() {
    const num1 = +numberInput1.value

    const num2 = +numberInput2.value
    const numberRest = restar(num1, num2)
    result.innerText = numberRest
}

function multiply() {
    const num1 = +numberInput1.value

    const num2 = +numberInput2.value
    const numberMultiply = multiplicar(num1, num2)
    result.innerText = numberMultiply
}

function divide() {
    const num1 = +numberInput1.value

    const num2 = +numberInput2.value
    const numberDivide = dividir(num1, num2)
    result.innerText = numberDivide
}