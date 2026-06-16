const botones = document.querySelectorAll(".tab-btn");
const contenidos = document.querySelectorAll(".tab-content");

botones.forEach(btn => {

    btn.addEventListener("click", () => {

        botones.forEach(b => {
            b.classList.remove("active");
        });

        contenidos.forEach(c => {
            c.classList.remove("active");
        });

        btn.classList.add("active");

        document
            .getElementById(btn.dataset.tab)
            .classList.add("active");

    });

});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

});

const sectionHeader = document.querySelector(".section-header");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

observer.observe(sectionHeader);


