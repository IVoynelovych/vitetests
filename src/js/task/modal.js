export function toggleMenu() {
    const menu = document.querySelector('.module-menu');
    if (menu) {
        menu.classList.toggle('is-hidden'); 
    }
}

