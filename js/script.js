//function = função ou procedure do pascal
//{ = ao begin
//} = ao end
//let = var
function calcular(){
    let resultado = document.getElementById ('resultado');
    let num1 = document.getElementById('edtnum1').value;
    let num2 = document.getElementById('edtnum2').value;
    let soma = Number(num1)+Number(num2);
    console.log('Soma '+soma);
    resultado.innerHTML+='<h1>Soma ' +soma+ '</h1>'
    let sub = Number(num1)-Number(num2);
    console.log('Subtração ' +sub);
     resultado.innerHTML+='<h1> Subtração ' +sub+ '</h1>'
    let div = Number(num1)/Number(num2);
    console.log('Divisão :' +div);
    resultado.innerHTML+='<h1> Divisão ' +div+ '</h1>'
    let mult = Number(num1)*Number(num2);
    console.log('Multiplicação ' +mult);
    resultado.innerHTML+='<h1> Multiplicação ' +mult+ '</h1>'

}
function ExibirTabuada(){
    let i=0;
    let tabuada= document.getElementById('tabuada')
    let entrada= document.getElementById('entrada').value;
    tabuada.innerHTML=''
    while(i <= 10){
        tabuada.innerHTML+='<h3>'+entrada+'x'+ i +'='+ (entrada * i) + '</h3>';
        i++;
    }

}
function verificar(){
    let exibirmaior = document.getElementById('exibirmaior');
    let n1 = document.getElementById('edtn1').value;
    let n2 = document.getElementById('edtn2').value;
    exibirmaior.innerHTML = '';
    if (n1 > n2) {
        exibirmaior.innerHTML = 'O maior número é: ' + n1;
    } else  {
        exibirmaior.innerHTML = 'O maior número é: ' + n2;
    }
    

}


