fs = require('fs');


var listSelectors = require('list-selectors');

 

  listSelectors(
  ['buttons/simple-radial-menu/css/style.css'], // source 
  // options 
  function(myList) { // callback 
    fs.writeFile('radial-menu-style.css.txt', JSON.stringify(myList, undefined, 2),
    function (err) {
     if (err) return console.log(err);
     console.log('theList > css\radial-menu-style.css.txt');
    console.log(myList);
    // ... do other things with your nice selector list
   });

  
  });
   
