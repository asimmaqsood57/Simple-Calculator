
function add()
{


    
let operand1 = document.getElementById('operand1').value;
let operand2 = document.getElementById('operand2').value;

op1 = parseFloat(operand1);
op2 = parseFloat(operand2);

let result = op1 + op2;

console.log(result);

document.getElementById('result').value = result;


}
function sub()
{


    
let operand1 = document.getElementById('operand1').value;
let operand2 = document.getElementById('operand2').value;

op1 = parseFloat(operand1);
op2 = parseFloat(operand2);

let result = op1 - op2;

console.log(result);

document.getElementById('result').value = result;


}
function Mul()
{


    
let operand1 = document.getElementById('operand1').value;
let operand2 = document.getElementById('operand2').value;

op1 = parseFloat(operand1);
op2 = parseFloat(operand2);

let result = op1 * op2;

console.log(result);

document.getElementById('result').value = result;


}


function div()
{


    
let operand1 = document.getElementById('operand1').value;
let operand2 = document.getElementById('operand2').value;

op1 = parseFloat(operand1);
op2 = parseFloat(operand2);

let result;

if (op2!=0) {
    result = op1/op2;
    document.getElementById('result').value = result;
}else{
    
    document.getElementById('result').value = "Invalid Expression..!";


}





}









