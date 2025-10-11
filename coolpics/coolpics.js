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

  function viewerTemplate(src, alt) {
    return `
      <img src="${src}" alt="${alt}">
      <button class="close-viewer" aria-label="Close viewer">X</button>
    `;
  }

  gallery.addEventListener('click', (event) => {
    const clickedImg = event.target.closest('img');
    if (!clickedImg) return;

    const src = clickedImg.src.split('-')[0] + '-full.jpeg';
    const alt = clickedImg.alt;

    modal.innerHTML = viewerTemplate(src, alt);
    modal.showModal();

    modal.querySelector('.close-viewer').addEventListener('click', () => modal.close());
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
});