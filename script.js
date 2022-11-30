const hd = document.getElementById('h')
const btn = document.getElementById("btn")
const txt = document.getElementById("txt")
const res = document.getElementById("res")

hd.addEventListener("click", () => {
    hd.innerHTML = "Clicked"
    hd.style.color = "blue"
})

btn.addEventListener("click", () => {
    let t = txt.value
    res.innerHTML = t.length + " Characters Found"
})