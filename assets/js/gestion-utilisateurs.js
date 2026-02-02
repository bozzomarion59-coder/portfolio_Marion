const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));


// --- zoomer les images ---
const images = document.querySelectorAll('.galerie img');

images.forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const zoomImg = document.createElement('img');
    zoomImg.src = img.src;
    zoomImg.classList.add('zoomed');

    overlay.appendChild(zoomImg);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => overlay.remove());
  });
});


// --- Animation bouton GitHub ---
const btnGit = document.querySelector('.btn-github');

if (btnGit) {
  btnGit.addEventListener('mouseover', () => {
    btnGit.style.transform = 'scale(1.05)';
    btnGit.style.transition = '0.3s';
  });

  btnGit.addEventListener('mouseout', () => {
    btnGit.style.transform = 'scale(1)';
  });
}


const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
});

/* recalcul si fenêtre redimensionnée */
window.addEventListener('resize', updateCarousel);

