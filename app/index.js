// https://stackoverflow.com/questions/15005098/why-does-javascript-hoist-variables?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
import Location from './location'
// keep track of variables
const base_shoe_price = 20;
const base_robo_price = 50;
const base_octo_price = 100;
const base_dog_price = 600;
const base_super_dog_price = 1000;

let distance = 0;
let per_click = 1;
let num_shoes = 0;
let num_robo = 0;
let num_octo = 0;
let num_dog = 0;
let num_super_dog = 0;
let price_shoes = base_shoe_price;
let price_robo = base_robo_price;
let price_octo = base_octo_price;
let price_dog = base_dog_price;
let price_super_dog = base_super_dog_price;
let health_level = 50;
let health_decline_rate = 1000;
let inventory = 0;
let sleeping = false;
let num_bars = 0;
let num_fruit = 0;
let super_fruit_counter = 0;
const locations = [
  new Location('Ottawa, CAN', '#ffffff', 'Welcome to Ottawa!', false, 0, 'road', 
  `
------------------------------------------------------------------------
              ,_   .  ._. _.  .                                         
           , _-\\','|~\\~      ~/      ;-'_   _-'     ,;_;_,    ~~-        
  /~~-\\_/-'~'--' \\~~| ',    ,'      /  / ~|-_\\_/~/~      ~~--~~~~'--_    
  /             *,/'-/~ '\\ ,' _  , '|,'|~                   ._/-, /~     
  ~/-'~\\_,       '-,| '|. '   ~  ,\\ /'~                /    /_  /~       
 -~      '|        '',\\~|\\       _\\~     ,_  ,               /|          
          '\\        /'~          |_/~\\\\,-,~  \\ "         ,_,/ |          
           |       /            ._-~'\\_ _~|              \\ ) /           
            \\   __-\\           '/      ~ |\\  \\_          /  ~            
  .,         '\\ |,  ~-_      - |          \\\\_' ~|  /\\  \\~ ,              
               ~-_'  _;       '\\           '-,   \\,' /\\/  |              
                 '\\_,~'\\_       \\_ _,       /'    '  |, /|'              
                   /     \\_       ~ |      /         \\  ~'; -,_.         
                   |       ~\\        |    |  ,        '-_, ,; ~ ~\\       
                    \\,      /        \\    / /|            ,-, ,   -,     
                     |    ,/          |  |' |/          ,-   ~ \\   '.    
                    ,|   ,/           \\ ,/              \\       |        
                    /    |             ~                 -~~-, /   _     
                    |  ,-'                                    ~    /     
                    / ,'                                      ~          
                    ',|  ~                                               
                      ~'                                                 
------------------------------------------------------------------------
`),
  new Location('British Colombia, CAN', '#bbdefb', 'Welcome to British Columbia!', false, 2000, 'mountains', 
  `
------------------------------------------------------------------------
              ,_   .  ._. _.  .                                         
           , _-\\','|~\\~      ~/      ;-'_   _-'     ,;_;_,    ~~-        
  /~~-\\_/-'~'--' \\~~| ',    ,'      /  / ~|-_\\_/~/~      ~~--~~~~'--_    
  /             *,/'-/~ '\\ ,' _  , '|,'|~                   ._/-, /~     
  ~/-'~\\_,   **  '-,| '|. '   ~  ,\\ /'~                /    /_  /~       
 -~      '| **     '',\\~|\\       _\\~     ,_  ,               /|          
          '\\        /'~          |_/~\\\\,-,~  \\ "         ,_,/ |          
           |       /            ._-~'\\_ _~|              \\ ) /           
            \\   __-\\           '/      ~ |\\  \\_          /  ~            
  .,         '\\ |,  ~-_      - |          \\\\_' ~|  /\\  \\~ ,              
               ~-_'  _;       '\\           '-,   \\,' /\\/  |              
                 '\\_,~'\\_       \\_ _,       /'    '  |, /|'              
                   /     \\_       ~ |      /         \\  ~'; -,_.         
                   |       ~\\        |    |  ,        '-_, ,; ~ ~\\       
                    \\,      /        \\    / /|            ,-, ,   -,     
                     |    ,/          |  |' |/          ,-   ~ \\   '.    
                    ,|   ,/           \\ ,/              \\       |        
                    /    |             ~                 -~~-, /   _     
                    |  ,-'                                    ~    /     
                    / ,'                                      ~          
                    ',|  ~                                               
                      ~'                                                 
------------------------------------------------------------------------
`),
  new Location('Los Angelos, USA', '#ffe082', 'Welcome to Los Angelos!', false, 6000, 'city',  `
------------------------------------------------------------------------
              ,_   .  ._. _.  .                                         
           , _-\\','|~\\~      ~/      ;-'_   _-'     ,;_;_,    ~~-        
  /~~-\\_/-'~'--' \\~~| ',    ,'      /  / ~|-_\\_/~/~      ~~--~~~~'--_    
  /             *,/'-/~ '\\ ,' _  , '|,'|~                   ._/-, /~     
  ~/-'~\\_,   **  '-,| '|. '   ~  ,\\ /'~                /    /_  /~       
 -~      '| **     '',\\~|\\       _\\~     ,_  ,               /|          
          '\\*       /'~          |_/~\\\\,-,~  \\ "         ,_,/ |          
           |*      /            ._-~'\\_ _~|              \\ ) /           
            \\   __-\\           '/      ~ |\\  \\_          /  ~            
  .,         '\\ |,  ~-_      - |          \\\\_' ~|  /\\  \\~ ,              
               ~-_'  _;       '\\           '-,   \\,' /\\/  |              
                 '\\_,~'\\_       \\_ _,       /'    '  |, /|'              
                   /     \\_       ~ |      /         \\  ~'; -,_.         
                   |       ~\\        |    |  ,        '-_, ,; ~ ~\\       
                    \\,      /        \\    / /|            ,-, ,   -,     
                     |    ,/          |  |' |/          ,-   ~ \\   '.    
                    ,|   ,/           \\ ,/              \\       |        
                    /    |             ~                 -~~-, /   _     
                    |  ,-'                                    ~    /     
                    / ,'                                      ~          
                    ',|  ~                                               
                      ~'                                                 
------------------------------------------------------------------------
`),
  new Location('San José, Costa Rica', '#aed581', 'Welcome to San José!', true, 12000, 'rainy',  `
------------------------------------------------------------------------
              ,_   .  ._. _.  .                                         
           , _-\\','|~\\~      ~/      ;-'_   _-'     ,;_;_,    ~~-        
  /~~-\\_/-'~'--' \\~~| ',    ,'      /  / ~|-_\\_/~/~      ~~--~~~~'--_    
  /             *,/'-/~ '\\ ,' _  , '|,'|~                   ._/-, /~     
  ~/-'~\\_,   **  '-,| '|. '   ~  ,\\ /'~                /    /_  /~       
 -~      '| **     '',\\~|\\       _\\~     ,_  ,               /|          
          '\\*       /'~          |_/~\\\\,-,~  \\ "         ,_,/ |          
           |*      /            ._-~'\\_ _~|              \\ ) /           
            \\*  __-\\           '/      ~ |\\  \\_          /  ~            
  .,         '\\*|,  ~-_      - |          \\\\_' ~|  /\\  \\~ ,              
               ~-*' _;       '\\           '-,   \\,' /\\/  |              
                 '\\*,~'\\_       \\_ _,       /'    '  |, /|'              
                   /     \\_       ~ |      /         \\  ~'; -,_.         
                   |       ~\\        |    |  ,        '-_, ,; ~ ~\\       
                    \\,      /        \\    / /|            ,-, ,   -,     
                     |    ,/          |  |' |/          ,-   ~ \\   '.    
                    ,|   ,/           \\ ,/              \\       |        
                    /    |             ~                 -~~-, /   _     
                    |  ,-'                                    ~    /     
                    / ,'                                      ~          
                    ',|  ~                                               
                      ~'                                                 
------------------------------------------------------------------------
`),
  new Location('Patagonian Desert, Argentina', '#fff59d', 'Welcome to The Patagonian Desert!', false, 20000, 'desert',  `
------------------------------------------------------------------------
              ,_   .  ._. _.  .                                         
           , _-\\','|~\\~      ~/      ;-'_   _-'     ,;_;_,    ~~-        
  /~~-\\_/-'~'--' \\~~| ',    ,'      /  / ~|-_\\_/~/~      ~~--~~~~'--_    
  /             *,/'-/~ '\\ ,' _  , '|,'|~                   ._/-, /~     
  ~/-'~\\_,   **  '-,| '|. '   ~  ,\\ /'~                /    /_  /~       
 -~      '| **     '',\\~|\\       _\\~     ,_  ,               /|          
          '\\*       /'~          |_/~\\\\,-,~  \\ "         ,_,/ |          
           |*      /            ._-~'\\_ _~|              \\ ) /           
            \\*  __-\\           '/      ~ |\\  \\_          /  ~            
  .,         '\\*|,  ~-_      - |          \\\\_' ~|  /\\  \\~ ,              
               ~-*' _;       '\\           '-,   \\,' /\\/  |              
                 '\\*,~'\\_       \\_ _,       /'    '  |, /|'              
                   / *   \\_       ~ |      /         \\  ~'; -,_.         
                   |  *    ~\\        |    |  ,        '-_, ,; ~ ~\\       
                    \\,*     /        \\    / /|            ,-, ,   -,     
                     | *  ,/          |  |' |/          ,-   ~ \\   '.    
                    ,|*  ,/           \\ ,/              \\       |        
                    / *  |             ~                 -~~-, /   _     
                    |* ,-'                                    ~    /     
                    / ,'                                      ~          
                    ',|  ~                                               
                      ~'                                                 
------------------------------------------------------------------------
`),
  new Location('Atlantic Ocean', '#80cbc4', 'Welcome to the Atlantic Ocean!', false, 50000, 'rainy',  `
------------------------------------------------------------------------
              ,_   .  ._. _.  .                                         
           , _-\\','|~\\~      ~/      ;-'_   _-'     ,;_;_,    ~~-        
  /~~-\\_/-'~'--' \\~~| ',    ,'      /  / ~|-_\\_/~/~      ~~--~~~~'--_    
  /             *,/'-/~ '\\ ,' _  , '|,'|~                   ._/-, /~     
  ~/-'~\\_,   **  '-,| '|. '   ~  ,\\ /'~                /    /_  /~       
 -~      '| **     '',\\~|\\       _\\~     ,_  ,               /|          
          '\\*       /'~          |_/~\\\\,-,~  \\ "         ,_,/ |          
           |*      /            ._-~'\\_ _~|              \\ ) /           
            \\*  __-\\           '/      ~ |\\  \\_          /  ~            
  .,         '\\*|,  ~-_      - |          \\\\_' ~|  /\\  \\~ ,              
               ~-*' _;       '\\           '-,   \\,' /\\/  |              
                 '\\*,~'\\_       \\_ _,       /'    '  |, /|'              
                   / *   \\_       ~ |      /         \\  ~'; -,_.         
                   |  *    ~\\        |    |  ,        '-_, ,; ~ ~\\       
                    \\,*     / *      \\    / /|            ,-, ,   -,     
                     | *  ,/ **       |  |' |/          ,-   ~ \\   '.    
                    ,|*  ,/ *         \\ ,/              \\       |        
                    / *  | *           ~                 -~~-, /   _     
                    |* ,-'*                                   ~    /     
                    / *'**                                    ~          
                    ',|  ~                                               
                      ~'                                                 
------------------------------------------------------------------------
`),
  new Location('Agadez, Niger', '#ffcdd2', 'Welcome to Agadez!', true, 100000, 'desert',  `
------------------------------------------------------------------------
              ,_   .  ._. _.  .                                         
           , _-\\','|~\\~      ~/      ;-'_   _-'     ,;_;_,    ~~-        
  /~~-\\_/-'~'--' \\~~| ',    ,'      /  / ~|-_\\_/~/~      ~~--~~~~'--_    
  /             *,/'-/~ '\\ ,' _  , '|,'|~                   ._/-, /~     
  ~/-'~\\_,   **  '-,| '|. '   ~  ,\\ /'~                /    /_  /~       
 -~      '| **     '',\\~|\\       _\\~     ,_  ,               /|          
          '\\*       /'~          |_/~\\\\,-,~  \\ "         ,_,/ |          
           |*      /            ._-~'\\_ _~|              \\ ) /           
            \\*  __-\\           '/      ~ |\\  \\_          /  ~            
  .,         '\\*|,  ~-_      - | *        \\\\_' ~|  /\\  \\~ ,              
               ~-*' _;       '\\ *         '-,   \\,' /\\/  |              
                 '\\*,~'\\_     * \\_ _,       /'    '  |, /|'              
                   / *   \\_    *  ~ |      /         \\  ~'; -,_.         
                   |  *    ~\\  *     |    |  ,        '-_, ,; ~ ~\\       
                    \\,*     / *      \\    / /|            ,-, ,   -,     
                     | *  ,/ **       |  |' |/          ,-   ~ \\   '.    
                    ,|*  ,/ *         \\ ,/              \\       |        
                    / *  | *           ~                 -~~-, /   _     
                    |* ,-'*                                   ~    /     
                    / *'**                                    ~          
                    ',|  ~                                               
                      ~'                                                 
------------------------------------------------------------------------
`),
];
let unvisited_locations = locations;
let last_location_name;


window.onload = () => {
  // load the game
  try {
    let savegame = JSON.parse(localStorage.getItem("save"));

    if (savegame == null) {
      // so localStorage.getItem("save") is not undefined, but it is null
      alert("Welcome to The Ultimate Run");
    } else {
      if (typeof savegame.upgrades !== "undefined") {
        num_shoes = parseInt(savegame.upgrades.num_shoes);
        num_robo = parseInt(savegame.upgrades.num_robo);
        num_octo = parseInt(savegame.upgrades.num_octo);
        num_dog = parseInt(savegame.upgrades.num_dog);
        num_super_dog = parseInt(savegame.upgrades.num_super_dog);
        price_shoes = parseInt(savegame.upgrades.price_shoes);
        price_robo = parseInt(savegame.upgrades.price_robo);
        price_octo = parseInt(savegame.upgrades.price_octo);
        price_dog = parseInt(savegame.upgrades.price_dog);
        price_super_dog = parseInt(savegame.upgrades.price_super_dog);
        inventory = parseInt(savegame.upgrades.inventory);
      }
      if (typeof savegame.health !== "undefined") {
        health_level = parseInt(savegame.health.health_level);
        health_decline_rate = parseInt(savegame.health.health_decline_rate);
        num_bars = parseInt(savegame.health.num_bars);
        num_fruit = parseInt(savegame.health.num_fruit);
      }
      if (typeof savegame.current_state !== "undefined") {
        distance = parseInt(savegame.current_state.distance);
        per_click = parseInt(savegame.current_state.per_click);
        super_fruit_counter = parseInt(savegame.current_state.super_fruit_counter);

        unvisited_locations = [];
        let after_visited = false;
        for(let i = 0; i < locations.length; i++) {
          if (savegame.current_state.last_location_name === locations[i].name) {
            after_visited = true;
          }
          if (after_visited) {
            unvisited_locations.push(locations[i]);
          }
        }
      }
    }
    // solution to glitchiness

    set_health();
    update_html();
    determine_location();
  } catch(error) {
    console.error(error);
  }
}



// helper functions
function activate_button(button) {
  document.getElementById(button).removeAttribute("disabled");
}

function deactivate_button(button) {
  document.getElementById(button).setAttribute("disabled", "disabled");
}

function run(number) {
  if (health_level > 0) {
    distance = distance + number;
    document.getElementById("distance").innerHTML = distance;
  }
};

document.getElementById("clickButton").addEventListener ('click', () => {
  run(per_click);
});

document.getElementById("map_button").addEventListener('click', () => {
  let button = document.getElementById("map_button")
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

document.getElementById("sleepAction").addEventListener('click', () => {
  health_level = 50;
});

document.getElementById("eatNutBarAction").addEventListener('click', () => {
  if (health_level != 0) {
    health_level += (num_bars*5 + health_level > 50 ? 50 - health_level : num_bars*5);
    num_bars = 0;
  }
});

// MAKE HELPER FUNCTION FILE YO LOLZ DUMB
export function addParagraphToDialog(text) {
  const newParagraph = document.createElement("P");
  const newContent = document.createTextNode(text);
  newParagraph.appendChild(newContent);
  let dialog = document.getElementById("dialog");
  dialog.insertBefore(newParagraph, dialog.childNodes[0]);
}

export function add_fruit() {
  num_fruit++;
}

// event handler for buying shoes
document.getElementById("buyShoes").addEventListener ('click', () => {
  if (distance >= price_shoes) {
    num_shoes = num_shoes + 1;
    inventory = inventory + 1;
    distance = distance - price_shoes;
    per_click = per_click + 1;
    price_shoes = Math.floor(base_shoe_price*Math.pow(1.1, num_shoes));
    addParagraphToDialog("Awesome! Harnessed with your new kicks, you get to run a tad bit faster.");

  }
});

// event handler for buying robotic legs
document.getElementById("buyRobo").addEventListener ('click', () => {
  if (distance >= price_robo) {
    num_robo = num_robo + 1;
    inventory = inventory + 1;
    distance = distance - price_robo;
    price_robo = Math.floor(base_robo_price*Math.pow(1.1, num_robo));
    addParagraphToDialog("Swagilicious legs my friend! Now you can let your new legs do the work for you. Automatic running!");
  }
});

// event handler for buying octopus legs
document.getElementById("buyOcto").addEventListener ('click', () => {
  if (distance >= price_octo) {
    num_octo = num_octo + 1;
    inventory = inventory + 1;
    distance = distance - price_octo;
    price_octo = Math.floor(base_octo_price*Math.pow(1.1, num_octo));
    addParagraphToDialog("Cheetah what? New studies show that octopi are the fastest creatures to ever live, and you got their legs!");
  }
});

// event handler for buying dog
document.getElementById("buyDog").addEventListener ('click', () => {
  if (distance >= price_dog) {
    num_dog = num_dog + 1;
    inventory = inventory + 1;
    distance = distance - price_dog;
    price_dog = Math.floor(base_dog_price*Math.pow(1.1, num_dog));
    addParagraphToDialog("Dogs are truly man's best friend. Your dog's mileage also counts towards your total distance covered");
  }
});

// event handler for buying super dog
document.getElementById("buySuperDog").addEventListener ('click', () => {
  if (distance >= price_super_dog) {
    num_super_dog = num_super_dog + 1;
    inventory = inventory + 1;
    distance = distance - price_super_dog;
    price_super_dog = Math.floor(base_super_dog_price*Math.pow(1.1, num_super_dog));
    addParagraphToDialog("This dog runs like a pro, helping you rake in those miles like no other");
  }
});

function update_html() {
  document.getElementById('distance').innerHTML = distance;
  document.getElementById('per_click').innerHTML = per_click;
  document.getElementById('num_shoes').innerHTML = num_shoes;
  document.getElementById('price_shoes').innerHTML = price_shoes;
  document.getElementById('num_robo').innerHTML = num_robo;
  document.getElementById('price_robo').innerHTML = price_robo;
  document.getElementById('num_octo').innerHTML = num_octo;
  document.getElementById('price_octo').innerHTML = price_octo;
  document.getElementById('num_dog').innerHTML = num_dog;
  document.getElementById('price_dog').innerHTML = price_dog;
  document.getElementById('num_super_dog').innerHTML = num_super_dog;
  document.getElementById('price_super_dog').innerHTML = price_super_dog;
  document.getElementById('num_bars').innerHTML = num_bars;
  document.getElementById('num_fruit').innerHTML = num_fruit;
}

window.setInterval(
  update_html, 100);

// motivational messages
window.setInterval(function() {
  let random = Math.random();
  if (random < 0.25) {
    addParagraphToDialog("Keep on going!");
  } else if(random < 0.5) {
    addParagraphToDialog("Push through the pain!");
  } else if(random < 0.75) {
    addParagraphToDialog("One foot in front of the other!");
  } else {
    addParagraphToDialog("Keep on running!");
  }

}, 10000);

function decline_health() {
  health_level--;
  let html = '['
  for (let i = 0; i < health_level; i++) {
    html += '#'
  }
  for (let i = 0; i < 50 - health_level; i++) {
    html += '-'
  }
  html += `] ${Math.floor(health_level/50*100)}% health-level`
document.getElementById('health-bar').innerHTML = html;
document.getElementById('night').style.opacity = 0.8 - health_level/50
}

// call this for onload
function set_health() {
  let html = '['
  for (let i = 0; i < health_level; i++) {
    html += '#'
  }
  for (let i = 0; i < 50 - health_level; i++) {
    html += '-'
  }
  html += `] ${Math.floor(health_level/50*100)}% health-level`
document.getElementById('health-bar').innerHTML = html;
document.getElementById('night').style.opacity = 0.8 - health_level/50
}


//when you eat a superfruit, you 1. deactivate health_decline
// but you only deactivate it if it hasn't been 10 minutes yet
// (you need to save this thing).
// each minute, you decrease, but if it is at a level below zero, then
// just don't decrease

document.getElementById('eatSuperFruit').addEventListener('click', () => {
  if (num_fruit > 0) {
    num_fruit--;
    super_fruit_counter = 10;
    let fruit_timer = window.setInterval(() => {
      if (super_fruit_counter > 0) {
        super_fruit_counter--;
      } else {
        clearInterval(fruit_timer);
      }
    }, 60000); // every minute for ten increments
  }
});

// health bar decline
window.setInterval(function() {
  if (health_level > 0 && super_fruit_counter === 0) {
    health_level--;
    set_health();
  } else if (document.getElementById('sleep').childNodes.length > 4 && super_fruit_counter === 0) {
    activate_button('sleepAction');
    activate_button('eatNutBarAction');
    activate_button('eatSuperFruit');
    health_level = 50;
    set_health();
    addParagraphToDialog("Don't push yourself too hard! Watch your health bar, if it gets to 0%, you will automatically sleep for 5 seconds. Alternatively, fuel yourself with nut bars and sleep!");
    let sleep_div = document.getElementById('sleep')
    while (sleep_div.firstChild) {
      sleep_div.removeChild(sleep_div.firstChild);
    }
  } else if (super_fruit_counter === 0) {
    deactivate_button('sleepAction');
    deactivate_button('eatNutBarAction');
    deactivate_button('eatSuperFruit');
    const newParagraph = document.createElement("P");
    newParagraph.style.color = 'white';
    const newContent = document.createTextNode("zzZZZzzZZZzzz");
    newParagraph.appendChild(newContent);
    document.getElementById("sleep").appendChild(newParagraph);
  }
}, health_decline_rate);

function determine_location() {
  for(let i = 0; i < unvisited_locations.length; i++) {
    if (unvisited_locations[i].at_distance <= distance) {
      unvisited_locations[i].set_location();
      let last_location = unvisited_locations.shift();
      last_location_name = last_location.name
    }
  }
}
//... maybe separate these into their separate functions so that
//we can see the progress and it's not just jumpy every minute
window.setInterval(function() {
  run(num_robo);
  run(num_robo*5);
  run(num_octo*10);
  run(num_dog*13);
  run(num_super_dog*40);

  if (distance % 3 == 0 && distance != 0) {
    num_bars += 1;
    addParagraphToDialog('You found a nut bar');
  }

  // update button states
  if (distance >= price_shoes && health_level > 0) {
    activate_button('buyShoes');
  } else {
    deactivate_button('buyShoes');
  }

  if (num_fruit > 0) {
    activate_button('eatSuperFruit');
  } else {
    deactivate_button('eatSuperFruit');
  }

  if (num_bars > 0 && health_level != 0) {
    activate_button('eatNutBarAction');
  } else {
    deactivate_button('eatNutBarAction');
  }

  if (distance >= price_robo && health_level > 0) {
    activate_button('buyRobo');
  } else {
    deactivate_button('buyRobo');
  }

  if (distance >= price_octo && health_level > 0) {
    activate_button('buyOcto');
  } else {
    deactivate_button('buyOcto');
  }

  if (distance >= price_dog && health_level > 0) {
    activate_button('buyDog');
  } else {
    deactivate_button('buyDog');
  }

  if (distance >= price_super_dog && health_level > 0) {
    activate_button('buySuperDog');
  } else {
    deactivate_button('buySuperDog');
  }

  if (distance >= price_shoes && health_level > 0) {
    activate_button('buyShoes');
  } else {
    deactivate_button('buyShoes');
  }
  // put this is another setInterval...
  // also this is a bit glitchy!
  // save the state of the game
  // also run this save only at a certain interval
  let save = {
    upgrades: {
      num_shoes: num_shoes,
      num_robo: num_robo,
      num_octo: num_octo,
      num_dog: num_dog,
      num_super_dog: num_super_dog,
      price_shoes: price_shoes,
      price_robo: price_robo,
      price_octo: price_octo,
      price_dog: price_dog,
      price_super_dog: price_super_dog,
      inventory: inventory
    },
    health: {
      health_level: health_level,
      health_decline_rate: health_decline_rate,
      num_bars: num_bars,
      num_fruit: num_fruit
    },
    current_state: {
      distance: distance,
      per_click: per_click,
      last_location_name: last_location_name,
      super_fruit_counter: super_fruit_counter
    }
  }

  try {
    localStorage.setItem("save", JSON.stringify(save));
  } catch(error) {
    console.error(error); // this just formats error loggin
  }

  determine_location();

}, 1000);

// when you use export, it will enable this function to live at the globale function
export function restart_cheat() {
  distance = 0;
  per_click = 1;
  num_shoes = 0;
  num_robo = 0;
  num_octo = 0;
  num_dog = 0;
  num_super_dog = 0;
  price_shoes = base_shoe_price;
  price_robo = base_robo_price;
  price_octo = base_octo_price;
  price_dog = base_dog_price;
  price_super_dog = base_super_dog_price;
  health_level = 50;
  health_decline_rate = 1000;
  inventory = 0;
  num_bars = 0;
  super_fruit_counter = 0;
  num_fruit = 0;
  let dialog = document.getElementById('dialog')

  unvisited_locations = locations;
  while (dialog.firstChild) {
    dialog.removeChild(dialog.firstChild);
  }
  console.log("restart successful!");
}

// DO NOT JUMP BETWEEN LOCATION CHEATS
// this is because you only shift the FIRST
// element of the array
export function bc_cheat() {
  distance = 2000;
}

export function la_cheat() {
  distance = 6000;
}

export function sj_cheat() {
  distance = 12000;
}

export function argentina_cheat() {
  distance = 20000;
}

export function ocean_cheat() {
  distance = 50000;
}

export function niger_cheat() {
  distance = 100000;
}
