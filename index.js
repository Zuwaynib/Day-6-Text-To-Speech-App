function soundOn() {
    let textInput = document.querySelector("#text-input").value;

    if (textInput.trim() !== "") { 
        let utterance = new SpeechSynthesisUtterance(textInput);
        speechSynthesis.speak(utterance);
    } else {
        console.log("No text entered!");
    }

}