// toggleBtn 연결
const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
  // 클릭하면 active를 넣어주거나 빼준다.
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});
