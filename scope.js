var counter = 0;

(function (root) { // IIFE
  
  
  console.log(counter);

  function count() {
    // counter = 0;
    for (var i = 0; i < 10; i++) {
      counter++
      console.log(counter);
    }  
  }

  count();
  
  console.log('Final output ' + counter);

  
}(this))

// var someVariable = 999;

// Show function scope
  // Show that loops don't introduce new scope
  // Show lexical scoping
  // Show var/no var
  // Good practice to write variables at the top of scope because they get hoisted