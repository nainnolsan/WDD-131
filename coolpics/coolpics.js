document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu');
  const navList = document.querySelector('nav ul');

  if (!menuButton || !navList) return;

  menuButton.addEventListener('click', () => {
    navList.classList.toggle('show');
    const isOpen = navList.classList.contains('show');
    menuButton.setAttribute('aria-expanded', isOpen);
  });

  const handleResize = () => {
    if (window.innerWidth >= 1000) {
      navList.classList.add('show');
    } else {
      navList.classList.remove('show');
    }
  };

  handleResize();
  window.addEventListener('resize', handleResize);
});

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const modal = document.querySelector('.viewer');

  if (!gallery || !modal) return;

  gallery.addEventListener('click', (event) => {
    const clickedImg = event.target.closest('img');
    if (!clickedImg) return;

    const src = clickedImg.src.split('-')[0] + '-full.jpeg';
    const alt = clickedImg.alt;

    modal.innerHTML = `
      <img src="${src}" alt="${alt}">
      <button class="close-viewer">X</button>
    `;
    modal.showModal();

    // Cerrar con botón X
    modal.querySelector('.close-viewer').addEventListener('click', () => modal.close());
  });

  // Cerrar si hace clic fuera del contenido
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
});