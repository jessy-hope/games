const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');

const characters = [
  'baby',
  'bambi',
  'familia',
  'garfield',
  'jerry',
  'mario',
  'patolino',
  'patrula-canina',
  'pica-pau',
  'scooby',
  'sonic',
  'tio-patinhas',
  'tom',
  'pantera',
];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');

  if (disabledCards.length === 28) {
    
    const timer = localStorage.getItem('counter');
    alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi de: ${timer}`);
    pause();
      }
}

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');
  const startNow = document.getElementById('counter').innerText;


if(startNow === "00:00") {
  alert("Clique em start para jogar");

}

  if (firstCharacter === secondCharacter && startNow != "00:00") {

    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    firstCard = '';
    secondCard = '';

    checkEndGame();

  } 
  else {
    setTimeout(() => {

      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      firstCard = '';
      secondCard = '';

    }, 500);
  }

}

const revealCard = ({ target }) => {

  if (target.parentNode.className.includes('reveal-card')) {
    return;
  }

  if (firstCard === '') {

    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;

  } else if (secondCard === '') {

    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;

    checkCards();

  }
}

const createCard = (character) => {

  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('https://jessy-hope.github.io/games/images/${character}.jpg')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);
  card.setAttribute('data-character', character)

  return card;
}

const loadGame = () => {
  const duplicateCharacters = [...characters, ...characters];

  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });
}

window.onload = () => {
  spanPlayer.innerHTML = localStorage.getItem('player');
  loadGame();
   
}
