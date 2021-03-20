textArea = document.querySelector("textarea")
textArea.addEventListener("select", (event) => {
    console.log(event.target.selectionStart)
})

function submitText() {
    textOutput = document.querySelector("div")
    console.log("🚀 ~ file: index.js ~ line 3 ~ submitText ~ textOutput", textOutput)
    
    
    textInput = textArea.value
    console.log(textInput)
    textOutput.classList.add("hidden")
    if (textInput) {
        textOutput.classList.remove("hidden")
    }
}
