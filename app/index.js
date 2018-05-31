import {locations} from './locations-array';

// keep track of variables
const baseShoePrice = 20;
const baseRoboPrice = 50;
const baseOctoPrice = 100;
const baseDogPrice = 600;
const baseSuperDogPrice = 1000;

let distance = 0;
let perClick = 1;
let numShoes = 0;
let numRobo = 0;
let numOcto = 0;
let numDog = 0;
let numSuperDog = 0;
let priceShoes = baseShoePrice;
let priceRobo = baseRoboPrice;
let priceOcto = baseOctoPrice;
let priceDog = baseDogPrice;
let priceSuperDog = baseSuperDogPrice;
let healthLevel = 50;
let healthDeclineRate = 1000;
let inventory = 0;
let numBars = 0;
let numFruit = 0;
let superFruitCounter = 0;

// helper functions
function activateButton(button) {
  document.getElementById(button).removeAttribute('disabled');
}

function deactivateButton(button) {
  document.getElementById(button).setAttribute('disabled', 'disabled');
}

function run(number) {
  if (healthLevel <= 0) { return; }
  distance += number;
  document.getElementById('distance').innerHTML = numberFormat(distance);
}

function restart() {
  distance = 0;
  perClick = 1;
  numShoes = 0;
  numRobo = 0;
  numOcto = 0;
  numDog = 0;
  numSuperDog = 0;
  priceShoes = baseShoePrice;
  priceRobo = baseRoboPrice;
  priceOcto = baseOctoPrice;
  priceDog = baseDogPrice;
  priceSuperDog = baseSuperDogPrice;
  healthLevel = 50;
  healthDeclineRate = 1000;
  inventory = 0;
  numBars = 0;
  superFruitCounter = 0;
  numFruit = 0;
  const dialog = document.getElementById('dialog');

  while (dialog.firstChild) {
    dialog.removeChild(dialog.firstChild);
  }
}

function determineLocation() {
  for (let i = locations.length - 1; i >= 0; i--) {
    if (locations[i].atDistance <= distance) {
      locations[i].setLocation();
      break;
    }
  }
}

function setHealth() {
  let html = '[';
  for (let i = 0; i < healthLevel; i++) {
    html += '#';
  }
  for (let i = 0; i < 50 - healthLevel; i++) {
    html += '-';
  }
  html += `] ${Math.floor(healthLevel / 50 * 100)}% health-level`;
  document.getElementById('health-bar').innerHTML = html;
  document.getElementById('night').style.opacity = 0.8 - (healthLevel / 50);
}

function updateHtml() {
  document.getElementById('distance').innerHTML = numberFormat(distance);
  document.getElementById('per_click').innerHTML = perClick;
  document.getElementById('num_shoes').innerHTML = numShoes;
  document.getElementById('price_shoes').innerHTML = numberFormat(priceShoes);
  document.getElementById('num_robo').innerHTML = numRobo;
  document.getElementById('price_robo').innerHTML = numberFormat(priceRobo);
  document.getElementById('num_octo').innerHTML = numOcto;
  document.getElementById('price_octo').innerHTML = numberFormat(priceOcto);
  document.getElementById('num_dog').innerHTML = numDog;
  document.getElementById('price_dog').innerHTML = numberFormat(priceDog);
  document.getElementById('num_super_dog').innerHTML = numSuperDog;
  document.getElementById('price_super_dog').innerHTML = numberFormat(priceSuperDog);
  document.getElementById('num_bars').innerHTML = numBars;
  document.getElementById('num_fruit').innerHTML = numFruit;
}

function updateButtons() {
  if (distance >= priceShoes && healthLevel > 0) {
    activateButton('buyShoes');
  } else {
    deactivateButton('buyShoes');
  }

  if (numFruit > 0 && healthLevel > 0) {
    activateButton('eatSuperFruit');
  } else {
    deactivateButton('eatSuperFruit');
  }

  if (numBars > 0 && healthLevel > 0) {
    activateButton('eatNutBarAction');
  } else {
    deactivateButton('eatNutBarAction');
  }

  if (distance >= priceRobo && healthLevel > 0) {
    activateButton('buyRobo');
  } else {
    deactivateButton('buyRobo');
  }

  if (distance >= priceOcto && healthLevel > 0) {
    activateButton('buyOcto');
  } else {
    deactivateButton('buyOcto');
  }

  if (distance >= priceDog && healthLevel > 0) {
    activateButton('buyDog');
  } else {
    deactivateButton('buyDog');
  }

  if (distance >= priceSuperDog && healthLevel > 0) {
    activateButton('buySuperDog');
  } else {
    deactivateButton('buySuperDog');
  }

  if (distance >= priceShoes && healthLevel > 0) {
    activateButton('buyShoes');
  } else {
    deactivateButton('buyShoes');
  }
}

function numberFormat(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// functions that are used by locations.js
export function addParagraphToDialog(text) {
  const newParagraph = document.createElement('P');
  const newContent = document.createTextNode(text);
  newParagraph.appendChild(newContent);
  const dialog = document.getElementById('dialog');
  dialog.insertBefore(newParagraph, dialog.childNodes[0]);
}

export function addFruit() {
  numFruit++;
}

// load everything
window.onload = () => {
  try {
    const savegame = JSON.parse(localStorage.getItem('save'));
    if (savegame == null) {
      alert('Welcome to The Ultra Ultra Ultra Marathon (200,000km edition)');
    } else {
      if (typeof savegame.upgrades !== 'undefined') {
        numShoes = parseInt(savegame.upgrades.numShoes, 10);
        numRobo = parseInt(savegame.upgrades.numRobo, 10);
        numOcto = parseInt(savegame.upgrades.numOcto, 10);
        numDog = parseInt(savegame.upgrades.numDog, 10);
        numSuperDog = parseInt(savegame.upgrades.numSuperDog, 10);
        priceShoes = parseInt(savegame.upgrades.priceShoes, 10);
        priceRobo = parseInt(savegame.upgrades.priceRobo, 10);
        priceOcto = parseInt(savegame.upgrades.priceOcto, 10);
        priceDog = parseInt(savegame.upgrades.priceDog, 10);
        priceSuperDog = parseInt(savegame.upgrades.priceSuperDog, 10);
        inventory = parseInt(savegame.upgrades.inventory, 10);
      }
      if (typeof savegame.health !== 'undefined') {
        healthLevel = parseInt(savegame.health.healthLevel, 10);
        healthDeclineRate = parseInt(savegame.health.healthDeclineRate, 10);
        numBars = parseInt(savegame.health.numBars, 10);
        numFruit = parseInt(savegame.health.numFruit, 10);
      }
      if (typeof savegame.currentState !== 'undefined') {
        distance = parseInt(savegame.currentState.distance, 10);
        perClick = parseInt(savegame.currentState.perClick, 10);
        superFruitCounter = parseInt(savegame.currentState.superFruitCounter, 10);
      }
    }
    // after loading the data from the localStorage,
    // reset the elements of the display
    setHealth();
    updateHtml();
    updateButtons();
    determineLocation();
  } catch (error) {
    console.error(error);
  }
};

document.getElementById('clickButton').addEventListener ('click', () => {
  run(perClick);
});

document.getElementById('map_button').addEventListener('click', () => {
  const button = document.getElementById('map_button');
  if (button.innerHTML === 'HIDE MAP') {
    button.innerHTML = 'SHOW MAP';
    document.getElementById('map').style.display = 'none';
    document.getElementById('map_caption').style.display = 'none';
  } else {
    button.innerHTML = 'HIDE MAP';
    document.getElementById('map').style.display = 'block';
    document.getElementById('map_caption').style.display = 'block';
  }
});

document.getElementById('eatNutBarAction').addEventListener('click', () => {
  if (healthLevel === 0) { return; }
  healthLevel += ((numBars * 5) + healthLevel > 50 ? 50 - healthLevel : numBars * 5);
  numBars = 0;
});

document.getElementById('eatSuperFruit').addEventListener('click', () => {
  if (numFruit <= 0) { return; }
  numFruit--;
  superFruitCounter = 10;
  const fruitTimer = window.setInterval(() => {
    if (superFruitCounter > 0) {
      superFruitCounter--;
    } else {
      clearInterval(fruitTimer);
    }
  }, 60000);
});

// event handler for buying shoes
document.getElementById('buyShoes').addEventListener ('click', () => {
  if (distance < priceShoes) { return; }
  numShoes++;
  inventory++;
  distance -= priceShoes;
  perClick++;
  priceShoes = Math.floor(baseShoePrice * Math.pow(1.1, numShoes));
  addParagraphToDialog('Awesome! Harnessed with your new kicks, ' +
    'you get to run a tad bit faster.');
});

// event handler for buying robotic legs
document.getElementById('buyRobo').addEventListener ('click', () => {
  if (distance < priceRobo) { return; }
  numRobo++;
  inventory++;
  distance -= priceRobo;
  priceRobo = Math.floor(baseRoboPrice * Math.pow(1.1, numRobo));
  addParagraphToDialog('Swagilicious legs my friend! ' +
    'Now you can let your new legs do the work for you. ' +
    'Automatic running!');
});

// event handler for buying octopus legs
document.getElementById('buyOcto').addEventListener ('click', () => {
  if (distance < priceOcto) { return; }
  numOcto++;
  inventory++;
  distance -= priceOcto;
  priceOcto = Math.floor(baseOctoPrice * Math.pow(1.1, numOcto));
  addParagraphToDialog('Cheetah what? New studies show that octopi ' +
    'are the fastest creatures to ever live, and you got their legs!');
});

// event handler for buying dog
document.getElementById('buyDog').addEventListener ('click', () => {
  if (distance < priceDog) { return; }
  numDog++;
  inventory++;
  distance -= priceDog;
  priceDog = Math.floor(baseDogPrice * Math.pow(1.15, numDog));
  addParagraphToDialog("Dogs are truly man's best friend. Your dog's " +
    'mileage also counts towards your total distance covered');
});

// event handler for buying super dog
document.getElementById('buySuperDog').addEventListener ('click', () => {
  if (distance < priceSuperDog) { return; }
  numSuperDog++;
  inventory++;
  distance -= priceSuperDog;
  priceSuperDog = Math.floor(baseSuperDogPrice * Math.pow(1.15, numSuperDog));
  addParagraphToDialog('This dog runs like a pro, helping you ' +
    'rake in those miles like no other');
});

// check and update the display frequently
window.setInterval(() => {
  updateHtml();
  updateButtons();
  determineLocation();
}, 100);

// loop function call for animating the running man
(function loop() {
  const runningMan = document.getElementById('running-man');
  if (healthLevel <= 0) {
    runningMan.style.color = 'white';
    runningMan.innerHTML = `

    z
     z  ||  /
      O----/--   

    `;
  } else if (runningMan.innerHTML.match(/_O/) === null) {
    runningMan.style.color = 'black';
    runningMan.innerHTML =
      `
    _O/
      \\
      /\\_
      \\  \`
      \`
    `;
  } else {
    runningMan.style.color = 'black';
    runningMan.innerHTML = `
      \\O_  
   ,/\\/
     /
     \\
     \`
    `;
  }
  window.setTimeout(loop, 1200 - (800 * (healthLevel / 50)));
})();

// Display random motivational messages
window.setInterval(() => {
  const random = Math.random();
  if (random < 0.25) {
    addParagraphToDialog('Keep on going!');
  } else if (random < 0.5) {
    addParagraphToDialog('Push through the pain!');
  } else if (random < 0.75) {
    addParagraphToDialog('One foot in front of the other!');
  } else {
    addParagraphToDialog('Keep on running!');
  }

}, 10000);


// health bar decline
window.setInterval(() => {
  if (healthLevel > 0 && superFruitCounter === 0) {
    healthLevel--;
    setHealth();
  } else if (document.getElementById('sleep').childNodes.length > 4 && superFruitCounter === 0) {
    healthLevel = 50;
    setHealth();
    addParagraphToDialog("Don't push yourself too hard!" +
      ' Watch your health bar, if it gets to 0%, you will ' +
      'automatically sleep for 5 seconds. Alternatively, ' +
      'fuel yourself with nut bars!');
    const sleepDiv = document.getElementById('sleep');
    while (sleepDiv.firstChild) {
      sleepDiv.removeChild(sleepDiv.firstChild);
    }
  } else if (superFruitCounter === 0) {
    const newParagraph = document.createElement('P');
    newParagraph.style.color = 'white';
    const newContent = document.createTextNode('zzZZZzzZZZzzz');
    newParagraph.appendChild(newContent);
    document.getElementById('sleep').appendChild(newParagraph);
  }
}, healthDeclineRate);

window.setInterval(() => {
  // calculations for spacing out the increase of distance
  let numUpgrades = 0;
  const upgradesArray = [numRobo, numOcto, numDog, numSuperDog];
  for (let i = 0; i < upgradesArray.length; i++) {
    if (upgradesArray[i] > 0) {
      numUpgrades++;
    }
  }
  setTimeout(() => { run(numRobo * 5); }, 1000 / numUpgrades);
  setTimeout(() => { run(numOcto * 15); }, 2 * 1000 / numUpgrades);
  setTimeout(() => { run(numDog * 25); }, 3 * 1000 / numUpgrades);
  setTimeout(() => { run(numSuperDog * 50); }, 4 * 1000 / numUpgrades);

  // game end
  if (distance >= 200000) {
    alert("You've ran 20,000km and beat the game! The game is automatically restarted");
    restart();
  }

  // skewed random nut bar finding
  if (Math.random() > 0.9) {
    numBars += 1;
    addParagraphToDialog('You found a nut bar');
  }

  // save the sate of the game
  const save = {
    upgrades: {
      numShoes,
      numRobo,
      numOcto,
      numDog,
      numSuperDog,
      priceShoes,
      priceRobo,
      priceOcto,
      priceDog,
      priceSuperDog,
      inventory,
    },
    health: {
      healthLevel,
      healthDeclineRate,
      numBars,
      numFruit,
    },
    currentState: {
      distance,
      perClick,
      superFruitCounter,
    },
  };

  try {
    localStorage.setItem('save', JSON.stringify(save));
  } catch (error) {
    console.error(error);
  }
}, 1000);


// beginning-end game cheats
export function restartCheat() {
  restart();
}

export function endCheat() {
  distance = 199999;
}

// locational cheats
export function bcCheat() {
  distance = 2000;
}

export function laCheat() {
  distance = 6000;
}

export function sjCheat() {
  distance = 12000;
}

export function argentinaCheat() {
  distance = 20000;
}

export function oceanCheat() {
  distance = 50000;
}

export function nigerCheat() {
  distance = 100000;
}

export function fruitCheat() {
  numFruit++;
}
