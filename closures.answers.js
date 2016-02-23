(function () { //IIFE

  var myName = "George";

  var printMyName = (function () {
    var myName = "Sanborn";

    return function () {
      console.log(myName);
    }
  }())

  console.log(myName);

  printMyName();

  window.printMyName = printMyName;
  // Pass function as an argument
  // Attach function to window

}())