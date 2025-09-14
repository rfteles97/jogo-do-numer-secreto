let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;

// tem parametros para passar
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial() {


}
exibirMensagemInicial();


function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        let palavrasTentativas = tentativas > 1 ? 'tentativas': 'tentativa';
       exibirTextoNaTela('h1','Você Acertou');
       exibirTextoNaTela('p',`Você descobriu o numero secreto e realizou ${tentativas} ${palavrasTentativas}`);
       document.getElementById('reiniciar').removeAttribute('disabled')
    }else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p','O numero secreto é menor');
        }else {
            exibirTextoNaTela('p','O numero secreto é maior');
        }
    }tentativas++;
     limparCampo()

}

// não tem parametro, mas tem retorno
function gerarNumeroAleatorio() {
     let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
     let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

     if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
     }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido
     }
}

// função para limpar o campo
function limparCampo() {
    chute = document.querySelector('input');
    chute.value ='';
    console.log('limpo');
}

// função para reinificar o jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
   

}

