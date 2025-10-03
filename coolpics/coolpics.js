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