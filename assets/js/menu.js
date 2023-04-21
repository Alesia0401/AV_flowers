const menuBtn = document.getElementById('menu_toogle');
const navWindow = document.getElementById('navigation');
const body = document.getElementsByTagName('body');

function setMenuState() {
    menuBtn.classList.toggle('open');
    navWindow.classList.toggle('open');
    body[0].classList.toggle('block-scroll-body');
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