fs = require('fs');


var listSelectors = require('list-selectors');

 

  listSelectors(
  ['css/svgbutns-uncss.css'], // source 
  // options 
  function(myList) { // callback 
    fs.writeFile('svgbutns-uncss.css.txt', JSON.stringify(myList, undefined, 2),
    function (err) {
     if (err) return console.log(err);
     console.log('theList > svgbutns-uncss.css.txt');
    console.log(myList);
    // ... do other things with your nice selector list
   });

  
  });
   
