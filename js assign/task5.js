let txt=document.getElementById("txt");
let play=document.getElementById("play");
play.addEventListener('click',()=>{
    speech(txt.value)
})
function speech(rio){
    let talk=new SpeechSynthesisUtterance(rio)
    window.speechSynthesis.speak(talk);
    talk.rate=range.value
}
