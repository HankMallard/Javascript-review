(function () { //IIFE

  var functions = [];

  for (var i = 0; i < 10; i++) {
    functions.push(function () {
      console.log(i);
    })
  }

  for (var i = 0; i < functions.length; i++) {
    functions[i]();
  }
  // Pass function as an argument


  // Attach to window

}());