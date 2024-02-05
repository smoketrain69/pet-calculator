let num = 42
//let firstName = 'Vadim'
//const isPrigrammer = true

// alert - всплыв.окно

//console.log(firstName)

//let num2 = (num + 10 * 2) / (5 - 1)
//console.log(num2)

//const fullName = firstName + ' Korobeynikov' or const fullName = firstName + ' ' + 'Korobeynikov'
//console.log(fullName)

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divideBtn = document.getElementById('divide')
let action = '+'

//console.log(resultElement.textContent)
//resultElement.textContent = 42

//console.log(typeof sum)

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

multiplyBtn.onclick = function () {
    action = '*'
}

divideBtn.onclick = function () {
    action = '/'
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    }   else if (result == 0){
        resultElement.style.color = 'blue'
    }   else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeNumberWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (actionSymbol == '+') {
        return num1 + num2
    }else if (actionSymbol == '-') {
        return num1 - num2
    }else if (actionSymbol == '*') {
        return num1 * num2
    }else {
        return num1 / num2
    }
}

submitBtn.onclick = function () {
    const result = computeNumberWithAction(input1, input2, action)
    printResult(result)
    //if (action == '+')    {
    //    const sum = Number(input1.value) + Number(input2.value)
    //    printResult(sum)
    //}   else if (action == '-')    {
    //    const sum = Number(input1.value) - Number(input2.value)
    //    printResult(sum)
    //}
}