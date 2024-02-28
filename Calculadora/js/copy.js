export default function copiar (ev,resultInput) {
    const button = ev.currentTarget
    if (button.innerText === "Copiar") {
      button.innerText = "Copiado!"
      button.classList.add("success")
      navigator.clipboard.writeText(resultInput.value)
    } else {
      button.innerText = "Copiar"
      button.classList.remove("success")
    }
  }