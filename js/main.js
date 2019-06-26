const navigationLinks = document.querySelectorAll('.nav__link');
const pageOverlay = document.querySelector('.page-overlay');
const headerDescription = document.querySelector('.header__description');

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

const addWelcomeText = (firstName, lastName) => {
  const welcome = `Great to see you here, ${firstName} ${lastName}! <br>`

  headerDescription.innerHTML = welcome + headerDescription.innerHTML;
}

addWelcomeText('Jakub', 'Chojna');

window.onload = () => {
  fadeIn();
}

for ( let i = 0; i < navigationLinks; i++ ) {
  navigationLinks[i].addEventListener('click', () => transitionPage(event, delayLink, 500));
}