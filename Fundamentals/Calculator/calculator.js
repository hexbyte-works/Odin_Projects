let num1='',num2='',operation=undefined

function inputNumber(text){
    if(!operation){
        num1+=String(text)
        showNumber(num1)
    } else if(num1 && operation){
        num2+=String(text)
        showNumber(num2)
    }
}
function showNumber(text){
    const input = document.querySelector('#answer')
    input.value=Number(text)
}
function showOperation(text){
    if(operation){
        calculate()
    }
    operation=text
    const input = document.querySelector('#answer')
    input.value=text
    
}
function calculate(){
    if(operation=='+'){
        num1=Number(num1) + Number(num2)
    } else if(operation=='-'){
        num1=Number(num1) - Number(num2)
    } else if(operation=='*'){
        num1=Number(num1) * Number(num2)
    } else if(operation=='/'){
        num1=Number(num1) / Number(num2)
    }
    showNumber(num1)
    num2=''
    operation=undefined
}
function clear(){
    num1=''
    num2=''
    operation=undefined
    const input = document.querySelector('#answer')
    input.value = ''
}
button1=document.querySelector('#button1')
button1.addEventListener('click',()=>{
    inputNumber(1)
})
button2=document.querySelector('#button2')
button2.addEventListener('click',()=>{
    inputNumber(2)
})
button3=document.querySelector('#button3')
button3.addEventListener('click',()=>{
    inputNumber(3)
})
button4=document.querySelector('#button4')
button4.addEventListener('click',()=>{
    inputNumber(4)
})
button5=document.querySelector('#button5')
button5.addEventListener('click',()=>{
    inputNumber(5)
})
button6=document.querySelector('#button6')
button6.addEventListener('click',()=>{
    inputNumber(6)
})
button7=document.querySelector('#button7')
button7.addEventListener('click',()=>{
    inputNumber(7)
})
button8=document.querySelector('#button8')
button8.addEventListener('click',()=>{
    inputNumber(8)
})
button9=document.querySelector('#button9')
button9.addEventListener('click',()=>{
    inputNumber(9)
})
button0=document.querySelector('#button0')
button0.addEventListener('click',()=>{
    inputNumber(0)
})
buttonPlus=document.querySelector('#add-button')
buttonPlus.addEventListener('click',()=>{
    showOperation('+')
})
buttonMinus=document.querySelector('#minus-button')
buttonMinus.addEventListener('click',()=>{
    showOperation("-")
})
buttonMultiplication=document.querySelector('#multiply-button')
buttonMultiplication.addEventListener('click',()=>{
    showOperation('*')
})
buttonDivision=document.querySelector('#divide-button')
buttonDivision.addEventListener('click',()=>{
    showOperation('/')
})
buttonAnswer=document.querySelector('#answer-button')
buttonAnswer.addEventListener('click',()=>{
    calculate()
})
buttonClear=document.querySelector('#clear-button')
buttonClear.addEventListener('click',()=>{
    clear()
})
