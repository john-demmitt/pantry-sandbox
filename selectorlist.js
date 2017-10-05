fs = require('fs');


var listSelectors = require('list-selectors');

 

  listSelectors(
  ['css/pantry-new-menu-svg.css'], // source 
  // options 
  function(myList) { // callback 
    fs.writeFile('css/pantry-new-menu-svg.css.txt', JSON.stringify(myList, undefined, 2),
    function (err) {
     if (err) return console.log(err);
     console.log('theList > css/pantry-new-menu-svg.css.txt');
    console.log(myList);
    // ... do other things with your nice selector list
   });

   
  });
   
