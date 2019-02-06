(function() {
  var getRandomElement = function(arr) {
      var randomElement = Math.floor(Math.random() * arr.length);
      var randomArrItem = arr[randomElement];
      return randomArrItem;
    }
    // определение максимального значения для высоты столбца
  var getMaxElement = function(arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  window.utilities = {
    getRandomElement: getRandomElement,
    getMaxElement: getMaxElement
}
})()