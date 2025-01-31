function soundOn() {
    let textInput = document.querySelector("#text-input");
    let text = textInput.value;

    if (text.trim() !== "") { 
        let utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    } else {
        console.log("No text entered!");
    }

}