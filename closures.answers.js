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
  

}())