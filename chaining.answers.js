function MockJquery(name) {
  this.name = name;

  this.callbacks = {};

  this.thisFunctionAcceptsCallbacks = function (callback) {
    console.log('Thanks for the callback');

    var event = {
      type: 'click'
    };

    callback(event);
  }

  this.on = function (eventName, callback) {
    if (!this.callbacks[eventName]) {
      this.callbacks[eventName] = [];
    } 

    this.callbacks[eventName].push(callback);

    return this;
  }

  this.triggerEvent = function (eventName) {
    for (var i = 0; i < this.callbacks[eventName].length; i++) {
      this.callbacks[eventName][i].call(this);
    }
  }
}






