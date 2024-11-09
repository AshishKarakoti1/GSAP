function breakTheText() {

    var h1 = document.querySelector("h1")

    var h1Text = h1.textContent

    var splittedText = h1Text.split("")

    var clutter = ""

    var halfValue = Math.floor(splittedText.length / 2)

    splittedText.forEach(function (ele, idx) {
        if (idx < halfValue) {
            clutter += `<span class="a">${ele}</span>`
        } else {
            clutter += `<span class="b">${ele}</span>`
        }
    })

    h1.innerHTML = clutter

}

breakTheText()

gsap.from(".a", {
    y:50,
    duration:0.6,
    delay:0.5,
    stagger:0.15,
    opacity:0
})

gsap.from(".b", {
    y:50,
    duration:0.6,
    delay:0.5,
    stagger:-0.15,
    opacity:0
})