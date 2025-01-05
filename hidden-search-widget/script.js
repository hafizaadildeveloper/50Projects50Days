const input = document.querySelector("input")
const btn = document.querySelector("button")

btn.addEventListener("click", () => {
    input.classList.toggle("active")
    if (input.classList.contains("active")) {
        input.focus()
    } else {
        input.blur()
    }
})
input.addEventListener("blur", () => {
    input.classList.remove("active")
})