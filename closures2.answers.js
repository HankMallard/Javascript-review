(function () {
  
  var functions = [];

  for (var i = 0; i < 100; i++) {
    functions.push(function () {
      var functionNumber = i + 1
      console.log('This is function number ' + functionNumber);
    });
  }

  for (var i = 0; i < functions.length; i++) {
    functions[i]();
  }

}())