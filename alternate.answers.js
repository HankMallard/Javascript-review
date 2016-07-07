function FauxQueryElement(element) {
  this.alternate = function (callbackOne, callbackTwo) {
    var count = 0;

    if (element.length) {
      for (var i = 0; i < element.length; i++) {
        element.addEventListener('click', function () {
          count % 2 === 0 ? callbackOne() : callbackTwo();
          count++;
        });
      }
    } else {
      element.addEventListener('click', function () {
        count % 2 === 0 ? callbackOne() : callbackTwo();
        count++;
      });
    }
  }
}

function fauxQuery (selector) {
  var firstChar = selector.slice(0, 1);
  var name = selector.slice(1, selector.length);
  var element;

  if (firstChar === '.')
    element = document.getElementsByClassName(name);
  else if (firstChar === '#')
    element = document.getElementById(name);
  else
    throw new Error('This is fauxQuery, what do you expect?');

  return new FauxQueryElement(element);
}

elem = fauxQuery('#random-button')
elem.alternate(function () {
  console.log("I'm function one");
}, function () {
  console.log("I'm function two");
});