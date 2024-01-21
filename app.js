alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 15;
console.log(numeroSecreto);
let chute;
let tentativas = 1;
//Enquanto chute não for igual ao numero secreto
while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 99');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        } 
        // tentativas = tentativas + 1;
        tentativas++
    }
}