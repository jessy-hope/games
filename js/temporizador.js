// Defina a quantidade de tempo desejada em milissegundos
const tempoTotal = 60000; // 60 segundos

// Função para atualizar o temporizador
function atualizarTemporizador(tempoRestante) {
    // Converta milissegundos em minutos e segundos
    const minutos = Math.floor(tempoRestante / 60000);
    const segundos = ((tempoRestante % 60000) / 1000).toFixed(0);

    // Exiba o temporizador na página HTML
    document.getElementById('temporizador').innerHTML = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
}

// Função para iniciar o temporizador
function iniciarTemporizador() {
    let tempoRestante = tempoTotal;

    const temporizador = setInterval(() => {
        tempoRestante -= 1000; // diminua 1 segundo
        atualizarTemporizador(tempoRestante); // atualize o temporizador

        // Verifique se o temporizador chegou a zero
        if (tempoRestante <= 0) {
            clearInterval(temporizador); // Pare o temporizador
            alert('Tempo esgotado!'); // Exiba uma mensagem
        }
    }, 1000); // Chame a função a cada segundo (1000ms)
}

// Inicie o temporizador quando a página carregar
window.onload = iniciarTemporizador;
