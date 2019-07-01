const pageOverlay = document.querySelector('.page-overlay--js');
const headerDescription = document.querySelector('.header__description--js');
const burgerButton = document.querySelector('.nav__burger-button--js');
const navListGrid = document.querySelector('.nav__list--grid-js');
const burgerButtonUpperPart = document.querySelector('.burger-button__upper--js');

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
  burgerButtonUpperPart.classList.toggle('burger-button__upper--open');
  navListGrid.classList.toggle('nav__list--grid-visible');
}

const make2DigitsNumber = (number) => {
  if (number < 10 && number > 0) {
    return number = `0${number}`;
  } else {
    return number;
  }
}

const ifPageAddressContains = (string) => {
  const currentPageAddress = window.location.toString();
  return currentPageAddress.includes(string);
}

const generateMobileMenu = (parent) => {
  let navItemGrid, navLinkGrid, currentNumber;
  for ( let i=1; i <= 26 ; i++ ) {
    navItemGrid = document.createElement('li');
    navLinkGrid = document.createElement('a');
    currentNumber = make2DigitsNumber(i);
    navItemGrid.className = "nav__item nav__item--grid";
    navLinkGrid.className = `nav__link nav__link--grid nav__link--grid-${i} nav__link--js`;
    parent.appendChild(navItemGrid);
    navItemGrid.appendChild(navLinkGrid);

    if ( ifPageAddressContains('quotes') ) {
      navLinkGrid.setAttribute('href', `quote_${currentNumber}.html`);
    } else {
      navLinkGrid.setAttribute('href', `quotes/quote_${currentNumber}.html`);
    }
    navLinkGrid.textContent = `#${currentNumber}`;
  }
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

burgerButton.addEventListener('click', handleMobileMenu);
if ( navListGrid.children.length <= 2 ) {
  generateMobileMenu(navListGrid);
}


const navigationLinks = document.querySelectorAll('.nav__link--js');
for ( let i = 0; i < navigationLinks.length; i++ ) {
  navigationLinks[i].addEventListener('click', () => transitionPage(event, delayLink, 500));
}