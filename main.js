// criar um Hello World com Alert
alert('Hello World')

// 2 Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let numberOne = 11
let numberTwo = 10
let soma = numberOne + numberTwo
alert(soma)

// 3 Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
const isNum = 10
if (typeof isNum == 'number') {
    alert("É UM NÚMERO")
}else {
    alert("NÃO É UM NUMERO")
}

// 4 Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
const isString = '10'

if (typeof isString == 'string') {
    alert('É UMA STRING')
}else {
    alert('NÃO É UMA STRING')
}

// 5 Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const isBoolean = 'true'

if (typeof isBoolean == 'boolean') {
    alert('É UM BOOLEANO')
}else {
    alert('NÃO É UM BOOLEANO')
}

// 6 Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

const sub = numberOne - numberTwo
alert(sub)

// 7 Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

const mult = numberOne * numberTwo
alert(mult)

// 8 Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

const div = numberOne / numberTwo
alert(div)

// 9 Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

if (numberOne % 2 == 0 ){
    alert('É UM NUMERO PAR')
}else{
    alert('NÃO É NUMERO PAR')
}

// 10 Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

if (numberOne % 2 != 0){
    alert('É UM NUMERO IMPAR')
}else {
    alert('NÃO É UM NUMERO IMPAR')
}