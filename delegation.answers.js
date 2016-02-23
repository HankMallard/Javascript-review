(function() {

  var list = document.getElementById('list');
  var body = document.getElementsByTagName('body')[0];

  list.addEventListener('click', function (event) {
    console.log(this);
    console.log(event);

    if (event.target.dataset.item === '2') {
      alert('You win!');
    }

    // event.stopPropagation();
  });

  body.addEventListener('click', function (event) {
    alert('This is going to get super annoying');
  })

}())