const text = "Hello, I'm Keri";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("intro-text").textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = typeWriter;

const fadeInSections = document.querySelectorAll(".fade-in-section");
