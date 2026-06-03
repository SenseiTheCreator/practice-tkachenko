const iconBlock = document.getElementById(`iconBlock`)
const iconOpen = document.getElementById(`iconOpen`);
const iconClose = document.getElementById(`iconClose`);
const mainMenu = document.getElementById(`mainMenu`);

iconBlock.addEventListener('click', () => {
  iconOpen.classList.toggle('d-none');
  iconClose.classList.toggle('d-none');
  mainMenu.classList.toggle('menu-open');
});