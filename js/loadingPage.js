const addWelcomeText = (firstName, lastName) => {
  const welcome = `Great to see you here, ${firstName} ${lastName}! <br>`

  headerDescription.innerHTML = welcome + headerDescription.innerHTML;
}

const handleMobileGridMenu = () => {
  navListGrid.classList.toggle('nav__list--grid-visible');
  pageOverlay.classList.toggle('page-overlay--mobile-menu');
}

addWelcomeText('Jakub', 'Chojna');