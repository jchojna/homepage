const navigationLinks = document.querySelectorAll('.nav__link');
const pageOverlay = document.querySelector('.page-overlay');

function fadeIn() {
  pageOverlay.classList.remove('page-overlay--onload');
}

const transitionPage = (event, callback, timeout) => {
  event.preventDefault();
  setTimeout(() => callback(event.target), timeout);
  pageOverlay.classList.add('page-overlay--visible');
}

const delayLink = (element) => {
  window.location = element.href;
}

window.onload = () => {
  fadeIn();
}

navigationLinks[0].addEventListener('click', () => transitionPage(event, delayLink, 500));
navigationLinks[1].addEventListener('click', () => transitionPage(event, delayLink, 500));