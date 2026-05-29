const INTERVAL_MS = 5000

const imgs = Array.from(document.querySelectorAll(".carousel-img"))
const dotsContainer = document.querySelector(".carousel-dots")

if (imgs.length && dotsContainer) {
    // Build dot indicators dynamically from however many images exist
    imgs.forEach((_, i) => {
        const dot = document.createElement("span")
        dot.className = "carousel-dot" + (i === 0 ? " active" : "")
        dot.addEventListener("click", () => {
            goTo(i)
            resetTimer()
        })
        dotsContainer.appendChild(dot)
    })

    let current = 0
    let timer = setInterval(() => goTo(current + 1), INTERVAL_MS)

    function goTo(index) {
        const dots = document.querySelectorAll(".carousel-dot")
        imgs[current].classList.remove("active")
        dots[current].classList.remove("active")
        current = ((index % imgs.length) + imgs.length) % imgs.length
        imgs[current].classList.add("active")
        dots[current].classList.add("active")
    }

    function resetTimer() {
        clearInterval(timer)
        timer = setInterval(() => goTo(current + 1), INTERVAL_MS)
    }
}
