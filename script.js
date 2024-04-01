let slides = document.querySelectorAll('.slide');

function changeSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
}
