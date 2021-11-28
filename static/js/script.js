const hb = document.querySelector(".logo")
const menu = document.querySelector(".menu")
const items = document.querySelector(".items")
const  data = ["Test0", "Test1", "Test2", "Test3"]

// Insert menu items
for (let i = 0; i < data.length; i++) { 
items.insertAdjacentHTML('beforebegin', '<li class="item"><a href="#" class="link">Item' + i + '</a></li>')
}

// Toggle menu on click
hb.addEventListener("click", () => {
    hb.classList.toggle("active");
    menu.classList.toggle("active");
})

// Remove menu and items on click
document.querySelectorAll(".link").forEach(n => n.
    addEventListener("click", () => {
        hb.classList.remove("active");
        menu.classList.remove("active");
    }))