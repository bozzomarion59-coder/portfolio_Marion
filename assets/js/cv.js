const cvImage = document.querySelector('.cv-image');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');

cvImage.addEventListener('click', () => {
    lightboxImg.src = cvImage.src;
    lightbox.classList.remove('hidden');
});

lightbox.addEventListener('click', () => {
    lightbox.classList.add('hidden');
});
