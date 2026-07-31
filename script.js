const visor = document.getElementById('counterDisplay');
const btnPlay = document.getElementById('play');
const btnPause = document.getElementById('pause');
const btnStop = document.getElementById('stop');

let segundos = 0;
let timer = null;

function incrementar() {
    segundos++;
    visor.textContent = formatarTempo(segundos);
};

btnPlay.addEventListener('click', function() {
    if (timer === null) {
        timer = setInterval(incrementar, 1000);
    }
});

btnPause.addEventListener('click', function() {
    clearInterval(timer);
    timer = null;
});

btnStop.addEventListener('click', function() {
    clearInterval(timer); 
    timer = null;
    segundos = 0;

    visor.textContent = "00:00:00";
})

function formatarTempo(segundosTotais) {
    let hrs = Math.floor(segundosTotais / 3600);
    let mins = Math.floor((segundosTotais % 3600) / 60);
    let segs = segundosTotais % 60;

    // converter para texto garantindo 2 numeros do counter
    let hrsFormatado = String(hrs).padStart(2, '0');
    let minsFormatado = String(mins).padStart(2, '0');
    let segsFormatado = String(segs).padStart(2, '0');

    // retorna a string pronta no formato HH:MM:SS
    return `${hrsFormatado}:${minsFormatado}:${segsFormatado}`;
};

