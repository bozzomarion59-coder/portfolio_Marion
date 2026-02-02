const track = document.querySelector('.carousel-track');
const slides = Array.from(document.querySelectorAll('.carousel-track img'));
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

if (track && slides.length && prevBtn && nextBtn) {
    let index = 0;

    // Positionner les images côte à côte
    slides.forEach(slide => {
        slide.style.minWidth = '100%';
        slide.style.flexShrink = '0';
    });

    const updateCarousel = () => {
        const width = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${index * width}px)`;
    };

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
} else {
    console.warn('Carousel non initialisé : élément manquant.');
}

// --- LIGHTBOX ---
const images = document.querySelectorAll('.carousel-track img');

images.forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.classList.add('lightbox-overlay');

        const bigImg = document.createElement('img');
        bigImg.src = img.src;
        bigImg.classList.add('lightbox-image');

        overlay.appendChild(bigImg);
        document.body.appendChild(overlay);

        // Fermeture en cliquant n'importe où
        overlay.addEventListener('click', () => {
            overlay.remove();
        });
    });
});


