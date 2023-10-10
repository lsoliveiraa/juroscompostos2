// Esta linha seleciona o elemento HTML com o ID 'calcule' e adiciona um ouvinte de evento de clique (click).
document.getElementById('calculate').addEventListener('click',function() {

    //Esta linha obtem o valor digitado no elemento HTML com o ID 'value' e armazena na variavel 'value'.
    const value = document.getElementById('value').value;

    //Esta linha obtem o valor digitado no elemento HTML com o ID 'fee' e o divide por 100 para obter uma taxa em decimal.
    //o resultado e armazenado na variavel 'fee'.
    const fee = (document.getElementById('fee').value) / 100;
    
    //Esta linha obtem o valor digitado no elemento HTML com o ID 'time' e armazena na variavel 'time'
    const time = document.getElementById('time').value;

    //Esta linha calcula o total com base nos valores obtidos anteriormente. o calculo e realizado usando a 
    //formula de juros composto.
    const total = value * (1 + fee)**time;

    //Esta linha atualiza o conteudo do elemento HTML com o ID 'total' para montar o resultado formatado 
    //como uma string no formato "R$  X,XX".
    document.getElementById('total').innerHTML = ("R$" + total.toFixed(2).replace('.',','));

});