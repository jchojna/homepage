const navigationLinks = document.querySelectorAll('.nav__link--js');
const pageOverlay = document.querySelector('.page-overlay--js');
const headerDescription = document.querySelector('.header__description--js');
const burgerButton = document.querySelector('.nav__burger-button--js');
const navListGrid = document.querySelector('.nav__list--grid-js');

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

const handleMobileMenu = () => {
  navListGrid.classList.toggle('nav__list--grid-visible');
  pageOverlay.classList.toggle('page-overlay--mobile-menu');
}

const make2DigitsNumber = (number) => {
  if (number < 10 && number > 0) {
    return number = `0${number}`;
  } else {
    return number;
  }
}

const generateMobileMenu = (parent) => {
  for ( let i=1; i <= 26 ; i++ ) {
    const navItemGrid = document.createElement('li');
    const navLinkGrid = document.createElement('a');
    const currentNumber = make2DigitsNumber(i);
    navItemGrid.className = "nav__item nav__item--grid";
    navLinkGrid.className = "nav__link nav__link--grid";
    parent.appendChild(navItemGrid);
    navItemGrid.appendChild(navLinkGrid);
    navLinkGrid.setAttribute('href', `quote_${currentNumber}.html`)
    navLinkGrid.textContent = `Quote #${currentNumber}`;
  }
}

const createArrayOfQuotes = () => {
  const quotes = [];

}

















/*
 ######     ###    ##       ##        ######
##    ##   ## ##   ##       ##       ##    ##
##        ##   ##  ##       ##       ##
##       ##     ## ##       ##        ######
##       ######### ##       ##             ##
##    ## ##     ## ##       ##       ##    ##
 ######  ##     ## ######## ########  ######
*/

window.onload = () => {
  fadeIn();
}


/*
######## ##     ## ######## ##    ## ########  ######
##       ##     ## ##       ###   ##    ##    ##    ##
##       ##     ## ##       ####  ##    ##    ##
######   ##     ## ######   ## ## ##    ##     ######
##        ##   ##  ##       ##  ####    ##          ##
##         ## ##   ##       ##   ###    ##    ##    ##
########    ###    ######## ##    ##    ##     ######
*/

for ( let i = 0; i < navigationLinks; i++ ) {
  navigationLinks[i].addEventListener('click', () => transitionPage(event, delayLink, 500));
}

burgerButton.addEventListener('click', handleMobileMenu);

if ( navListGrid.children.length === 0 ) {
  generateMobileMenu(navListGrid);
}