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

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

const sectionHeaders = document.querySelectorAll(".section-header");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

sectionHeaders.forEach(header => {
    observer.observe(header);
});


const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});

const hamburger =
    document.querySelector(".hamburger");

const menu =
    document.querySelector(".menu");

hamburger.addEventListener("click", () => {

    menu.classList.toggle("active");

});

const btnManicura = document.querySelector(".btn-especialista.manicura");
const btnEstetica = document.querySelector(".btn-especialista.estetica");

function enviarWhatsApp(numero) {

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const servicio = document.getElementById("servicio").value;
    const mensaje = document.getElementById("mensaje").value;

    const texto = `Hola, quiero reservar una cita.

Nombre: ${nombre}
Teléfono: ${telefono}
Email: ${email}
Servicio: ${servicio}

Mensaje:
${mensaje}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
}

btnManicura.addEventListener("click", (e) => {

    e.preventDefault();

    enviarWhatsApp("34634370162");

});

btnEstetica.addEventListener("click", (e) => {

    e.preventDefault();

    enviarWhatsApp("34682008858");

});

const imagenes = document.querySelectorAll('.galeria-item img');

console.log(imagenes);

const lightbox = document.getElementById('lightbox');

const lightboxImg = document.getElementById('lightbox-img');

const cerrar = document.getElementById('cerrar');

imagenes.forEach(img => {

    img.addEventListener('click', () => {

        lightbox.style.display = 'flex';

        lightboxImg.src = img.src;

    });

});

cerrar.addEventListener('click', () => {

    lightbox.style.display = 'none';

});

lightbox.addEventListener('click', (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = 'none';

    }

});

imagenes.forEach(img => {

    img.addEventListener('click', () => {

        console.log("CLICK DETECTADO");

        lightbox.style.display = 'flex';

        lightboxImg.src = img.src;

    });

});

document.addEventListener('keydown', (e) => {

    if (e.key === 'Escape') {

        lightbox.style.display = 'none';

    }

});