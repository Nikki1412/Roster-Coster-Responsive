const menuToggle = document.querySelector('.menu-toggle input');
const navigasi = document.querySelector('ul');

menuToggle.addEventListener('click', function () {
    navigasi.classList.toggle('slide');
});