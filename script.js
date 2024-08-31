const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");

function setActive(i) {
    // Remove 'active' class from all slides
    slides.forEach(slide => slide.classList.remove("active"));
    // Add 'active' class to the selected slide
    slides[i].classList.add("active");

    // Remove 'active' class from all dots
    dots.forEach(dot => dot.classList.remove("active"));
    // Add 'active' class to the selected dot
    dots[i].classList.add("active");
}

// Attach click event listeners to each dot
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => setActive(index));
});
