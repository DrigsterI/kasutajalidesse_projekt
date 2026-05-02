const overlay = document.querySelector('.overlay');
const overlaybtns = document.querySelector('.overlay-buttons');

/*function handleClick(e) {
    if (e.target === overlay) {
        closeOverlay();
    }
}

function toggleOverlay() {
    overlay.style.display = "flex";
    overlay.style.opacity = "1";
    overlay.addEventListener('click', handleClick);
}

function closeOverlay() {
    overlay.style.opacity = '0';
    overlay.style.display = 'none';

    overlay.removeEventListener('click', handleClick);
}*/

function toggleOverlay() {
    overlay.classList.add('active');
    overlaybtns.classList.add('active');
    overlay.addEventListener('click', handleClick);
}

function closeOverlay() {
    overlay.classList.remove('active');
    overlaybtns.classList.remove('active');
}

function handleClick(e) {
    if (e.target === overlay) {
        closeOverlay();
    }
}