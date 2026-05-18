// ================= MOBILE MENU =================
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ================= SCROLL REVEAL =================
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", revealSection);

function revealSection() {
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){
            element.classList.add("active");
        }
    });
}

// Run on page load
revealSection();