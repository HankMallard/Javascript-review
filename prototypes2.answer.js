(function () {

  
  function Vehicle(speed) {
    this.speed = speed;

    this.getMake = function () {
      return 'my make is ' + this.make;
    }
  }

  var myVehicle = new Vehicle(100);

  console.log('My vehicle goes ' + myVehicle.speed);

  function Bike(size) {
    this.size = size;
  }

  var myBike = new Bike('M');

  console.log('My bike is ' + myBike.size);

  // console.log('My bike goes ' + myBike.getMake()); 

  Bike.prototype = Vehicle(10);

  var mySecondBike = new Bike('L');

  console.log('My second bike is ' + mySecondBike.size);

  console.log('My bike goes ' + mySecondBike.getMake()); 

  mySecondBike.make = 'Giant';

  console.log('My bike goes ' + mySecondBike.getMake()); 

}());