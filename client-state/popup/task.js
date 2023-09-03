
const modal = document.getElementById('subscribe-modal');
const closeModalButton = document.getElementById('close-modal');


function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}


function getCookie(name) {
  const keyValue = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
  return keyValue ? keyValue[2] : null;
}


const isModalClosed = getCookie('modalClosed');


if (!isModalClosed) {
  modal.classList.add('modal_active');
}


closeModalButton.addEventListener('click', () => {
  modal.classList.remove('modal_active');
  setCookie('modalClosed', 'true', 365); 
});
