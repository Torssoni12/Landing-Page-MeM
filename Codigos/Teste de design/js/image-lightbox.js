const overlay = document.getElementById('lightboxOverlay');
const overlayImg = document.getElementById('lightboxImg');
const closeBtn = document.querySelector('.lightbox-close');

document.querySelectorAll('.expandable').forEach(img => {
    img.addEventListener('click', () => {
        overlayImg.src = img.src;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // trava scroll do fundo
    });
});

function closeLightbox() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeLightbox);
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeLightbox(); // clicou fora da imagem
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});