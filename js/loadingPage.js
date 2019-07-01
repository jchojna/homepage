const addWelcomeText = (firstName, lastName) => {
  const welcome = `Great to see you here, ${firstName} ${lastName}! <br>`

  headerDescription.innerHTML = welcome + headerDescription.innerHTML;
}

addWelcomeText('Jakub', 'Chojna');