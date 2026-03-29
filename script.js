// Lógica do Cronômetro
function updateTimer() {
    // Data de início do namoro: 14 de Setembro de 2024
    const startDate = new Date("2024-09-14T00:00:00");
    const now = new Date();
    
    // Diferença em milissegundos
    const diff = now - startDate;

    // Cálculos de tempo
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    // Seleciona o elemento e atualiza o HTML de forma limpa
    const timerElement = document.getElementById("timer");
    
    // Verifica se o elemento existe antes de tentar atualizar
    if(timerElement) {
        timerElement.innerHTML = `
            <div class="timer-item"><span>${days}</span><small>DIAS</small></div>
            <div class="timer-item"><span>${hours}</span><small>HRS</small></div>
            <div class="timer-item"><span>${mins}</span><small>MIN</small></div>
            <div class="timer-item"><span>${secs}</span><small>SEG</small></div>
        `;
    }
}

// Executa a função a cada 1 segundo
setInterval(updateTimer, 1000);

// Chama uma vez ao carregar para não começar zerado
updateTimer();

// Lógica de Som e Entrada
const startBtn = document.getElementById('start-btn');
const overlay = document.getElementById('overlay');
const iframe = document.getElementById('youtube-player');

startBtn.addEventListener('click', () => {
    // Esconde a tela de entrada
    overlay.style.opacity = '0';
    document.body.style.overflow = 'auto'; // Reativa a rolagem
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 1000);

    // Manda o comando de Autoplay para o YouTube
    iframe.src += "&autoplay=1";
});