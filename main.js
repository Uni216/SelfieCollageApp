var SpeechRecognition= window.webkitSpeechRecognition
var Recognition= new SpeechRecognition()

function Start(){
   document.getElementById("textbox").innerHTML= " " 
   Recognition.start()
}
Recognition.onresult=function(event){
    console.log(event)
    var Output= event.results[0][0].transcript
    console.log(Output)
    document.getElementById("textbox").innerHTML= Output
}
