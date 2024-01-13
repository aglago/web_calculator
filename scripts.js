const calc = document.getElementById('calc');
const results = document.getElementById('results');
let number = '';
let res = '';

function detectC(){
    number = '';
    res = '';
    calc.innerHTML = number;
    results.innerHTML = res;
}

function detect1(){
    number += '1';
    calc.innerHTML = number;
}

function detect2(){
    number += '2';
    calc.innerHTML = number;
}

function detect3(){
    number += '3';
    calc.innerHTML = number;
}

function detect4(){
    number += '4';
    calc.innerHTML = number;
}

function detect5(){
    number += '5';
    calc.innerHTML = number;
}

function detect6(){
    number += '6';
    calc.innerHTML = number;
}

function detect7(){
    number += '7';
    calc.innerHTML = number;
}

function detect8(){
    number += '8';
    calc.innerHTML = number;
}

function detect9(){
    number += '9';
    calc.innerHTML = number;
}

function detect0(){
    number += '0';
    calc.innerHTML = number;
}

function detectPlus(){
    number += '+';
    calc.innerHTML = number;
}

function detectMinus(){
    number += '-';
    calc.innerHTML = number;
}

function detectDivide(){
    number += '/';
    calc.innerHTML = number;
}

function detectMultiple(){
    number += '*';
    calc.innerHTML = number;
}

function detectEquals(){
    res = eval(number);
    results.innerHTML = res;
}

function detectPercent(){
    number += '%';
    number = parseInt(number);
    number = number / 100;
    number = number.toString()
    calc.innerHTML = number;
}

function detectDot(){
    number += '.';
    calc.innerHTML = number;
}

function detectBracket(){
    let bracket = number.search(/(\()/);
    if (bracket >= 0)
        bracket = ')';
    else
        bracket = '(';

    number += bracket;
    calc.innerHTML = number;
}

function deleteLast(){
    number = number.slice(0,-1);
    calc.innerHTML = number;
}