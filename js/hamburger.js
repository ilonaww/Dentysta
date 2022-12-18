const hamburger = document.querySelector('.c-toggle_menu__hamburger');
const nav = document.querySelector('.c-nav');

const handleClick = () => {
    hamburger.classList.toggle('c-toggle_menu__hamburger-active');
    nav.classList.toggle('c-nav-active');
}

hamburger.addEventListener('click', handleClick);