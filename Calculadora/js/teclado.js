const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

export default function teclado(ev,input,resultInput) {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
      input.value += ev.key
      return
    }
    if (ev.key === "Backspace") {
      input.value = input.value.slice(0, -1)
    }
    if (ev.key === "Enter") {
      resultInput.value = "ERROR"
      resultInput.classList.add("error")
      const result = eval(input.value)
      resultInput.value = result
      resultInput.classList.remove("error")
    }
  }