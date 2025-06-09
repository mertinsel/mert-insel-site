
window.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav");
    if (window.scrollY > 50) { // 50px kayınca çalışır
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

