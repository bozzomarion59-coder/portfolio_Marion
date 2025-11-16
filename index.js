// Effet hover sur les boutons GitHub
const boutons = document.querySelectorAll('.btnGit');

boutons.forEach(bouton => {
  bouton.addEventListener('mouseover', () => {
    bouton.style.transform = 'scale(1.1)'; 
    bouton.style.transition = 'transform 0.3s'; 
  });

  bouton.addEventListener('mouseout', () => {
    bouton.style.transform = 'scale(1)'; 
  });
});

// Changement de couleur de la navbar au scroll
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.backgroundColor = '#3498db'; 
  } else {
    nav.style.backgroundColor = '#2c3e50'; 
  }
});
