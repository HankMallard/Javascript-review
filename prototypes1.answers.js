// (function () {

  function Rover(x, y, orientation) {
    this.x = x;

    this.y = y;

    this.orientation = orientation;
  }

  rover = new Rover(1, 1, 'S');

  Rover.prototype.getPosition = function () {
    return [this.x, this.y, this.orientation];
  }

  // window.rover2 = new Rover(10, 10, 'N');


  // window.rover2.getPosition = function () {
  //   console.log(this.x + ', ' + this.y + ', ' + this.orientation);
  // }

// }());