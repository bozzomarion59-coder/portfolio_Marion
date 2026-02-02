const piste = document.querySelector('.carousel-track');
const imagesCarrousel = piste ? Array.from(piste.children) : [];
const boutonSuivant = document.querySelector('.next');
const boutonPrecedent = document.querySelector('.prev');

let position = 0;

function afficherImage() {
  if (imagesCarrousel.length === 0) return;
  const largeur = imagesCarrousel[0].getBoundingClientRect().width;
  piste.style.transform = `translateX(-${position * largeur}px)`;
}

// Bouton suivant
if (boutonSuivant) {
  boutonSuivant.addEventListener('click', () => {
    position = (position + 1) % imagesCarrousel.length;
    afficherImage();
  });
}

// Bouton précédent
if (boutonPrecedent) {
  boutonPrecedent.addEventListener('click', () => {
    position = (position - 1 + imagesCarrousel.length) % imagesCarrousel.length;
    afficherImage();
  });
}

// Recalcul si la fenêtre change de taille
window.addEventListener('resize', afficherImage);

// Lancement initial
afficherImage();

// Lightbox au clic sur les images
const imagesZoomables = document.querySelectorAll('.carousel-track img');

imagesZoomables.forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.classList.add('lightbox-overlay');

    const zoomed = document.createElement('img');
    zoomed.src = img.src;
    zoomed.alt = img.alt;
    zoomed.classList.add('lightbox-image');

    overlay.appendChild(zoomed);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => overlay.remove());
  });
});

