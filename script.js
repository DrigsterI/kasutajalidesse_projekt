const overlay = document.querySelector('.overlay');

function handleClick(e) {
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
}