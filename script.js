document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll(".fade-in");
    const slideElements = document.querySelectorAll(".slide-up");
    const zoomElements = document.querySelectorAll(".zoom-in");

    const options = { threshold: 0.3 };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    fadeElements.forEach(el => observer.observe(el));
    slideElements.forEach(el => observer.observe(el));
    zoomElements.forEach(el => observer.observe(el));
});
