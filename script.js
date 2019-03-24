document.getElementById('hablar').addEventListener("click",()=>{
    decir(document.getElementById("texto").value);
});

function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}
