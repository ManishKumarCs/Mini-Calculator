const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
const firstNum = parseInt(document.querySelector('#first').value);
const secNum = parseInt(document.querySelector('#second').value);
const result = document.querySelector('#result');
result.innerHTML="Result : ";
const btn = document.querySelector('#btn');      
        const radioButtons = document.querySelectorAll('input[name="operation-type"]');
            let selectedOpr;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedOpr = radioButton.value;
                    break;
                }
            }
if(selectedOpr=='+') {result.innerHTML+=firstNum+secNum;}
else if(selectedOpr=='-') {result.innerHTML+=firstNum-secNum;}
else if(selectedOpr=='*') {result.innerHTML+=firstNum*secNum;}
else if(selectedOpr=='/') {result.innerHTML+=firstNum/secNum;}
})

