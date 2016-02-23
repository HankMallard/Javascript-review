(function () { //IIFE to control scope

  var myName = 'Sanborn';

  console.log(myName);

  function sayMyName () {
    console.log(myName); 
  }

  sayMyName();

  // =================================

  // var myName = 'Sanborn';

  // console.log(myName);

  // function sayMyName() {
  //   var myName = 'Ted';
  //   console.log(myName);
  // }

  // sayMyName();

  // console.log(myName);

  // =================================

  // var myName = 'Sanborn';

  // for (var i = 0; i < 10; i++) {
  //   var myName = myName + i;
  //   console.log(myName);
  // }

  // console.log(myName);

  // =================================

  // var myName = 'Sanborn';

  // function sayMyNameABunch() {
  //   for (var i = 0; i < 10; i++) {
  //     var myName = myName + i;
  //     console.log(myName);
  //   }  
  // }
  
  // sayMyNameABunch();

  // console.log(myName);

}());