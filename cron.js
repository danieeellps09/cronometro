let hh = 0; // "let" é uma forma mais moderna de escrever "var"
let mm = 0;
let ss = 0;
let con = 0;

// "const" define uma constante, uma variável que não pode ser alterada
const counter = document.querySelector('.counter');
const startBtn = document.querySelector('#start-button');
const pauseBtn = document.querySelector('#pause-button');
const stopBtn = document.querySelector('#stop-button');

// Quando o evento "click" for disparado no botão, a função correspondente será chamada
startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
stopBtn.addEventListener('click', stop);

// Definindo as três funções principais 
function start() {
    console.log('start');
    cron = setInterval(() => timer(), 1000);
} 

function pause(){
    console.log('pause');
    clearInterval(cron);
}

function stop(){
    console.log('stop');
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;
    counter.innerText = '00:00:00';
}

//
function timer(){
    ss++ 
    if ( ss == 60) {
        ss = 0
        mm++;
    
        if (mm == 60) {
            mm = 0 
            hh++
        }
    }
    
    const format = (hh<10 ? '0' + hh : hh) + ':' + (mm <10 ? '0' + mm:mm) + ':' + (ss < 10 ? '0' + ss:ss);
    counter.innerText= format;
}

