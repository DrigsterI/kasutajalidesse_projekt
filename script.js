function toggleOverlay() {
    const overlay = document.getElementById('overlay-menu');
    const plusBtn = document.querySelector('.plus');

    overlay.classList.toggle('active');
}

document.getElementById('overlay-menu').addEventListener('click', function (e) {
    if (e.target === this) {
        this.classList.toggle('inactive');
    }
});