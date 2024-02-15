const body = document.querySelector('body');
const themeButton = document.querySelector('.label-theme');
themeButton.addEventListener('click', () => {
    body.classList.toggle('darkTheme');
    body.classList.add('active');
});