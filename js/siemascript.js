$(function () {
  
var mySiema = new Siema({
    duration: 250,
    loop: true
  });
  
  // listen for keydown event
  setInterval(function () {
    return mySiema.next();
  }, 3000);
});

