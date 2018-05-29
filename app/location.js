import {add_fruit, addParagraphToDialog} from './index'
class Location {
  constructor(name, color, intro_message, has_superfruit, at_distance, path, map) {
    this.name = name;
    this.color = color;
    this.intro_message = intro_message;
    this.has_superfruit = has_superfruit;
    this.at_distance = at_distance;
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
`
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
        `
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
        `
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
      `
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
        `
    }
  }

  set_location() {
    // only on the initial load
    if (document.getElementById('loc_name').innerHTML != this.name) {
      document.getElementById('loc_name').innerHTML = this.name;
      document.getElementById('map').innerHTML = this.map;
      document.body.style.backgroundColor = this.color;
      addParagraphToDialog(this.intro_message);
      if (this.has_superfruit && Math.random() > 0.5) {
        addParagraphToDialog('You picked up a superfruit... use it wisely');
        add_fruit();
      }
      document.getElementById('road').innerHTML = this.path;
    }
  }
}

export default Location;
