const display = document.getElementById("display");

function addValor(value){
    display.value += value;
}

function clearResultado(){
    display.value = '';
}

function calcular(){
    try{
        display.value = eval(display.value);
    }
    catch (error){
        display.value = 'erro';
    }
}