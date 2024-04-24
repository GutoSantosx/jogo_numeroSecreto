let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function ExibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
} 
function exibirMensagemInicial(){
    ExibirTextoNaTela('h1','Jogo do Número Secreto');
    ExibirTextoNaTela('p','Escolha o número entre 1 à 10:');
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if(chute == numeroSecreto){
        ExibirTextoNaTela('h1','Você acertou!');
    let palavraTentativas = tentativas > 1 ? 'tentativas':'tentativa';
    let mensagemTentativas = (`Você descobriu o Número Secreto com ${tentativas} ${palavraTentativas}!`);
        ExibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
            ExibirTextoNaTela('p','O número secreto é menor!');
        } else{
            ExibirTextoNaTela('p','O número secreto é maior!');
        }
    tentativas++;
    limparCampo();    
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); 
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista = numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);      //Push = adiciona item ao final da lista
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';            
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
