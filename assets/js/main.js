const hamburger = document.getElementById('iconBlock');
const closeBtn  = document.getElementById('closeMenu');
const menu      = document.getElementById('mainMenu');
 
hamburger.addEventListener('click', () => {
  menu.classList.add('menu-open');
  document.body.style.overflow = 'hidden';
});
 
closeBtn.addEventListener('click', () => {
  menu.classList.remove('menu-open');
  document.body.style.overflow = '';
});
 
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('menu-open');
    document.body.style.overflow = '';
  });
});
 