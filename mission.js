const themeSelector = document.querySelector('#theme');
const body = document.body;
const logo = document.querySelector('img');

function changeTheme() {
  if (themeSelector.value === 'dark') {
    body.classList.add('dark');
    logo.setAttribute('src', 'byui-logo_white.png');
  } else {
    body.classList.remove('dark');
    logo.setAttribute('src', 'byui-logo_blue.webp');
  }
}

themeSelector.addEventListener('change', changeTheme);