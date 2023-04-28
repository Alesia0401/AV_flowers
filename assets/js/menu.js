const menuBtn = document.getElementById('menu_toogle');
const navWindow = document.getElementById('navigation');
const body = document.getElementsByTagName('body');
const menuElements = document.querySelectorAll('nav li:not(:last-child)');

for (let i = 0; i < menuElements.length; i++) {
    const element = menuElements[i];
    element.addEventListener('click', setMenuState);
}

function setMenuState() {
    if (getComputedStyle(menuBtn).display === 'none') return;
    menuBtn.classList.toggle('open');
    navWindow.classList.toggle('open');
    if (!body[0].classList.contains('block-scroll-body')) {
        body[0].classList.add('block-scroll-body');
    } else {
        body[0].classList.remove('block-scroll-body');
    }
}

menuBtn.addEventListener('click', setMenuState);

document.addEventListener('scroll', function() {
    const headerEl = document.getElementById('header');
    if (window.pageYOffset > 1) {
        headerEl.classList.add('scroll');
    } else {
        headerEl.classList.remove('scroll');
    }
})

