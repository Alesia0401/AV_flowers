function closeMenu () {
    document.getElementById('menu_toogle').checked = false;
}

var elements = document.querySelectorAll('nav li:not(:last-child)');
for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.addEventListener('click', closeMenu);
}