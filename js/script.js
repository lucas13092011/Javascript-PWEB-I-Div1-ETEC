//function = função ou procedure do pascal
//{ = ao begin
//} = ao end
//let = var
function calcular(){
    let num1 = document.getElementById('edtnum1').value;
    let num2 = document.getElementById('edtnum2').value;
    let soma = num1+num2;
    console.log('Soma '+soma);
    let sub = num1-num2;
    console.log('Subtração '+sub);
    let div = num1/num2;
    console.log('Divisão '+div);
    let mult = num1*num2;
    console.log('Multiplicação '+mult);
}