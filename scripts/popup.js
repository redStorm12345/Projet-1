const contactBtn = document.getElementById('contact-btn');
const popup = document.getElementById('popup');


contactBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
});

window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});