const navigationLinks = document.querySelectorAll('.nav__link--js');
const pageOverlay = document.querySelector('.page-overlay--js');
const headerDescription = document.querySelector('.header__description--js');
const burgerButton = document.querySelector('.nav__burger-button--js');
const navList = document.querySelector('.nav__list');

const mediaFirstBreakpoint = 768;

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

const handleMobileMenu = () => {
    navList.classList.toggle('nav__list--visible');
    pageOverlay.classList.toggle('page-overlay--mobile-menu');
}

// FUNCTION CALLS

addWelcomeText('Jakub', 'Chojna');

window.onload = () => {
  fadeIn();
}

// EVENTS

for ( let i = 0; i < navigationLinks; i++ ) {
  navigationLinks[i].addEventListener('click', () => transitionPage(event, delayLink, 500));
}
burgerButton.addEventListener('click', handleMobileMenu);