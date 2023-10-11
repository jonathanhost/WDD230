const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');
let section = document.createElement('section');
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
  }

  const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let fullName = document.createElement('h2')
        let age = document.createElement('h3')
       let portrait  = document.createElement('img')
       let card  = document.createElement('div')

       fullName.innerHTML = `${prophet.name} ${prophet.lastname}`

       age.innerHTML = `${prophet.birthdate} - ${prophet.death}`
       portrait.src = prophet.imageurl;
       portrait.setAttribute('alt', 'Prophet Image');
       portrait.setAttribute('loading', 'lazy');
       portrait.setAttribute('width', '300px');
       portrait.setAttribute('height', '400px');
       
       card.appendChild(fullName)
       card.appendChild(age)
       card.appendChild(portrait)
       cards.appendChild(card)

    });
  }
  
  getProphetData();