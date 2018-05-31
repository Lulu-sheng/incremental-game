import {addFruit, addParagraphToDialog} from './index';
class Location {
  constructor (name, color, introMessage, hasSuperfruit, atDistance, path, map) {
    this.name = name;
    this.color = color;
    this.introMessage = introMessage;
    this.hasSuperfruit = hasSuperfruit;
    this.atDistance = atDistance;
    this.map = map;
    if (path === 'mountains') {
      this.path = `
    ___
   /   \\
  /     \\
 /       \\
/         \\
       ___
      /   \\
     /     \\
    /       \\
   /         \\
    ___
   /   \\
  /     \\
 /       \\
/         \\
       ___
      /   \\
     /     \\
    /       \\
   /         \\
    ___
   /   \\
  /     \\
 /       \\
/         \\
       ___
      /   \\
     /     \\
    /       \\
   /         \\
    ___
   /   \\
  /     \\
 /       \\
/         \\
       ___
      /   \\
     /     \\
    /       \\
   /         \\
    ___
   /   \\
  /     \\
 /       \\
/         \\
       ___
      /   \\
     /     \\
    /       \\
   /         \\
    ___
   /   \\
  /     \\
`;
    } else if (path === 'road') {
      this.path = 
`|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
|     ||     |
        `;
    } else if (path === 'desert') {
      this.path = 
`     /||\\
     ||||
     ||||
     |||| /|\\
/|\\  |||| |||
|||  |||| |||
|||  |||| |||
|||  |||| d||
|||  |||||||/
||b._||||~~'
\\||||||||
\`~~~||||
    ||||
 ~~~||||~~~~~~

      /||\\
      ||||
      ||||
      |||| /|\\
 /|\\  |||| |||
 |||  |||| |||
 |||  |||| |||
 |||  |||| d||
 |||  |||||||/
 ||b._||||~~'
 \\||||||||
 \`~~~||||
     ||||
~~~~~||||~~~

     /||\\
     ||||
     ||||
     |||| /|\\
/|\\  |||| |||
|||  |||| |||
|||  |||| |||
|||  |||| d||
|||  |||||||/
||b._||||~~'
\\||||||||
\`~~~||||
    ||||
 ~~~||||~~~~~~

     /||\\
     ||||
     ||||
     ||||
~~~~~||||~~~
        `;
    } else if (path === 'rainy') {
      this.path = 
`      (  )___
   (_   _    )
  / /(_) (__)
 / / / / / /
/ / / / / /
      (  )___
   (_   _    )
  / /(_) (__)
 / / / / / /
/ / / / / /
      (  )___
   (_   _    )
  / /(_) (__)
 / / / / / /
/ / / / / /
      (  )___
   (_   _    )
  / /(_) (__)
 / / / / / /
/ / / / / /
      (  )___
   (_   _    )
  / /(_) (__)
 / / / / / /
/ / / / / /
      (  )___
   (_   _    )
  / /(_) (__)
 / / / / / /
/ / / / / /
      (  )___
   (_   _    )
  / /(_) (__)
 / / / / / /
/ / / / / /
      (  )___
   (_   _    )
  / /(_) (__)
 / / / / / /
/ / / / / /
      (  )___
   (_   _    )
  / /(_) (__)
 / / / / / /
/ / / / / /
      (  )___
   (_   _    )
  / /(_) (__)
 / / / / / /
/ / / / / /
      `;
    } else if (path === 'city') {
      this.path = 
`     _____  
    |xxxxx|
    |xxxxx|
 ____xxxxx|
|++++|xxxx|
|++++|xxxx|
|++++|________
|++++|=|=|=|=|
|++++|=|=|=|=|
|+HH+| _HHHH_|
     _____  
    |xxxxx|
    |xxxxx|
 ____xxxxx|
|++++|xxxx|
|++++|xxxx|
|++++|________
|++++|=|=|=|=|
|++++|=|=|=|=|
|+HH+| _HHHH_|
     _____  
    |xxxxx|
    |xxxxx|
 ____xxxxx|
|++++|xxxx|
|++++|xxxx|
|++++|________
|++++|=|=|=|=|
|++++|=|=|=|=|
|+HH+| _HHHH_|
     _____  
    |xxxxx|
    |xxxxx|
 ____xxxxx|
|++++|xxxx|
|++++|xxxx|
|++++|________
|++++|=|=|=|=|
|++++|=|=|=|=|
|+HH+| _HHHH_|
     _____  
    |xxxxx|
    |xxxxx|
 ____xxxxx|
|++++|xxxx|
|++++|xxxx|
|++++|________
|++++|=|=|=|=|
|++++|=|=|=|=|
|+HH+| _HHHH_|
        `;
    }
  }

  setLocation() {
    if (document.getElementById('loc_name').innerHTML === this.name) { return; }
    document.getElementById('loc_name').innerHTML = this.name;
    document.getElementById('map').innerHTML = this.map;
    document.body.style.backgroundColor = this.color;
    addParagraphToDialog(this.introMessage);
    if (this.hasSuperfruit && Math.random() > 0.5) {
      addParagraphToDialog('You picked up a superfruit... use it wisely');
      addFruit();
    }
    document.getElementById('road').innerHTML = this.path;
  }
}

export default Location;
