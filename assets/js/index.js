var menu = document.querySelector('.menu #cek');
var nav = document.querySelector('nav ul');

menu.addEventListener('click' , function() {
  nav.classList.toggle('slide');
});