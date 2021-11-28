const hb = document.querySelector(".logo")
const menu = document.querySelector(".menu")

hb.addEventListener("click", () => {
    hb.classList.toggle("active");
    menu.classList.toggle("active");
})

document.querySelectorAll(".link").forEach(n => n.
    addEventListener("click", () => {
        hb.classList.remove("active");
        menu.classList.remove("active");
    }))