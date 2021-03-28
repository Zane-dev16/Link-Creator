textArea = document.querySelector("textarea")
linkInput = document.querySelector("input")
linkButton = document.querySelector("button")
span = document.querySelector("span")
textArea.addEventListener("select", (event) => {
    linkInput.classList.remove("hidden")
    linkButton.classList.remove("hidden")
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    span.innerHTML = selection
})

function linkText() {
    link = linkInput.value
    span.innerHTML = span.innerHTML.link(link)
}

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
