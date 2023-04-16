const elementoChute =document.getElementById('chute')
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(evento){
    chute = evento.results[0][0].transcript
    exibeChuteNaTela(chute);
    verificaChute(chute);
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <spam class="box">${chute}</spam>
    `
}

recognition.addEventListener('end',()=>{
    recognition.start()
})