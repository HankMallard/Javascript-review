(function () {

  $('#list').on('click', function (event) {
    console.log($(this));
    console.log(event);

    if (event.target.dataset.item === '2') {
      alert('You win!');
    }
  })


}())