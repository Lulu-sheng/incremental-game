import Location from './location';

export const locations = [
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
  new Location('Los Angelos, USA', '#ffe082', 'Welcome to Los Angelos!', false, 6000, 'city',
    `
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
  new Location('San José, Costa Rica', '#aed581', 'Welcome to San José!', true, 12000, 'rainy',
    `
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
  new Location('Patagonian Desert, Argentina', '#fff59d', 'Welcome to The Patagonian Desert!', false, 20000, 'desert',
    `
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
  new Location('Atlantic Ocean', '#80cbc4', 'Welcome to the Atlantic Ocean!', false, 50000, 'rainy',
    `
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
  new Location('Agadez, Niger', '#ffcdd2', 'Welcome to Agadez!', true, 100000, 'desert',
    `
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
