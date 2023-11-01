let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let númeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
   exibirTextoNaTela('h1', 'Jogo do número secreto');
   exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

 function verificarChute() {
    let chute = document.querySelector ('input').value;

    if (chute == númeroSecreto) {
      exibirTextoNaTela('h1', 'Acertou!');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
      exibirTextoNaTela('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
     if (chute > númeroSecreto) {
      exibirTextoNaTela('p', 'O número secreto é menor');
     } else {
      exibirTextoNaTela('p', 'O número secreto é maior');
     }
     tentativas++;
     limparCampo();
    }

 }

 function gerarNumeroAleatorio() {
    let NumeroEscolido = parseInt(Math.random() * numeroLimite + 1 );
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
      listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(NumeroEscolido)) {
      return gerarNumeroAleatorio();
    } else {
      listaDeNumerosSorteados.push(NumeroEscolido);
      console.log(listaDeNumerosSorteados)
      return NumeroEscolido;
    }
 }

 function limparCampo() {
   chute = document.querySelector('input');
   chute.value = '';
 }

 function reiniciarJogo() {
   númeroSecreto = gerarNumeroAleatorio();
   limparCampo();
   tentativas = 1;
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true)
 }
