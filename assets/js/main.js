const iconBlock = document.getElementById(`iconBlock`)
const iconOpen = document.getElementById(`iconOpen`);
const iconClose = document.getElementById(`iconClose`);
const mainMenu = document.getElementById(`mainMenu`);

iconBlock.addEventListener('click', () => {
  iconOpen.classList.toggle('d-none');
  iconClose.classList.toggle('d-none');
  mainMenu.classList.toggle('menu-open');
});

const loginBtn    = document.querySelector('.btn-outline');
const signupBtn   = document.querySelector('.btn-primary');
const loginModal  = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');

loginBtn.addEventListener('click', () => loginModal.classList.remove('d-none'));
signupBtn.addEventListener('click', () => signupModal.classList.remove('d-none'));

document.getElementById('closeLogin').addEventListener('click', () => loginModal.classList.add('d-none'));
document.getElementById('closeSignup').addEventListener('click', () => signupModal.classList.add('d-none'));

// Перемикання між модалками
document.getElementById('toSignUp').addEventListener('click', () => {
  loginModal.classList.add('d-none');
  signupModal.classList.remove('d-none');
});

document.getElementById('toLogin').addEventListener('click', () => {
  signupModal.classList.add('d-none');
  loginModal.classList.remove('d-none');
});

// Закриття при кліку на фон
[loginModal, signupModal].forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('d-none');
  });
});