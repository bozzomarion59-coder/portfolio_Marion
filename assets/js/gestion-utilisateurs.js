document.addEventListener('DOMContentLoaded', () => {

  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  let index = 0;

  // Déplacement du carrousel
  function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  // Attendre que toutes les images soient chargées
  Promise.all(
    slides.map(img => {
      return new Promise(resolve => {
        if (img.complete) resolve();
        else {
          img.onload = resolve;
          img.onerror = resolve;
        }
      });
    })
  ).then(() => {

    updateCarousel();

    // Bouton suivant
    nextBtn.addEventListener('click', () => {
      index = (index + 1) % slides.length;
      updateCarousel();
    });

    // Bouton précédent
    prevBtn.addEventListener('click', () => {
      index = (index - 1 + slides.length) % slides.length;
      updateCarousel();
    });

    // Recalcul en cas de redimensionnement
    window.addEventListener('resize', updateCarousel);

    // --- SWIPE MOBILE ---
    let startX = 0;
    let endX = 0;

    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });

    track.addEventListener('touchmove', (e) => {
      endX = e.touches[0].clientX;
    });

    track.addEventListener('touchend', () => {
      const swipeDistance = endX - startX;

      if (swipeDistance > 50) {
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
      }

      if (swipeDistance < -50) {
        index = (index + 1) % slides.length;
        updateCarousel();
      }
    });

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

        overlay.addEventListener('click', () => overlay.remove());
      });
    });

  });

});
