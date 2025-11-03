
document.addEventListener('DOMContentLoaded', function () {
  // mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
  });

  // populate year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // contact form (mailto fallback)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const subject = encodeURIComponent('Cerere ofertă de la ' + name);
      const body = encodeURIComponent(`Nume: ${name}\nEmail: ${email}\n\nMesaj:\n${message}`);
      window.location.href = `mailto:odorgicu@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  // Lightbox
  const gallery = document.getElementById('galleryGrid');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');

  function openLightbox(src, alt) {
    lightboxImage.src = src;
    lightboxImage.alt = alt || '';
    lightboxCaption.textContent = alt || '';
    lightbox.classList.remove('hidden');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.add('hidden');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.src = '';
    document.body.style.overflow = '';
  }

  if (gallery) {
    gallery.addEventListener('click', function (e) {
      const img = e.target.closest('img');
      if (!img) return;
      const full = img.getAttribute('data-full') || img.src;
      openLightbox(full, img.alt || '');
    });
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxBackdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
});
