const motusImage = document.querySelector('.motus-image');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');

motusImage.addEventListener('click', () => {
    lightboxImg.src = motusImage.src;
    lightbox.classList.remove('hidden');
});

lightbox.addEventListener('click', () => {
    lightbox.classList.add('hidden');
});
