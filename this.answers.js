console.log(this);

(function () {

  // 'use strict';

  console.log(this);


  function Rover() {
    console.log(this);
  }

  var rover = new Rover;


  function Event() {
    this.on = function (name, callback) {
      callback.call(this);
    }
  }

  var event = new Event;

  event.on('click', function () {
    console.log(this);
  })

}())