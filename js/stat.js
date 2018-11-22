  var fireballSize = 22;
  var wizardSpeed = 3;
  var wizardWidth = 90;
  var PROPORTION_WIDTH = 1.333
  var COEFFICIENT_HEIGHT = 2 / 3

  function getWizardHeight() {
      return PROPORTION_WIDTH * wizardWidth;
  }

  function getFireballSpeed(left) {
      return left ? 5 : 2;
  }

  function getWizardX(width) {
      return (width - wizardWidth) / 2;
  }

  function getWizardY(height) {
      return (height - getWizardHeight()) * COEFFICIENT_HEIGHT;
  }


  var CLOUD_WIDTH = 420;
  var CLOUD_HIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var TEXT_X = 240;
  var TEXT_Y = 30;
  var GAP = 10;
  var TEXT_GAP = 25;
  var BAR_WIDTH = 40;
  var BAR_HEIGTH = 100;
  var BAR_X = 130;
  var BAR_Y = 250;
  var NAME_Y = 265;
  var NUMBERS_GAP = 65;



  var BAR_DISTANCE = 50;
  var BAR_TRAVEL = BAR_DISTANCE + BAR_WIDTH

  var renderCloud = function(ctx, x, y, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HIGHT);
  };
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


  window.renderStatistics = function(ctx, players, times) {
      renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)')
      renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff')

      // рисуем текст
      ctx.font = 'Bold 16px PT Mono';
      ctx.fillStyle = '#000';
      ctx.fillText('Ура вы победили!', TEXT_X, TEXT_Y);
      ctx.fillText('Список результатов:', TEXT_X, TEXT_Y + TEXT_GAP);


      for (var i = 0; i < players.length; i++) {
          if (players[i] === 'Вы') {
              ctx.fillStyle = 'rgba(255, 0, 0, 1)';
          } else {
              ctx.fillStyle = 'rgba(34, 29, 255, 0.8)';
          }
          var maxTime = getMaxElement(times);
          ctx.fillText(Math.ceil(times[i]), BAR_X + BAR_TRAVEL * i, BAR_Y - GAP - (BAR_HEIGTH * times[i] / maxTime));
          ctx.fillText(players[i], BAR_X + BAR_TRAVEL * i, NAME_Y);
          ctx.fillRect(BAR_X + BAR_TRAVEL * i, BAR_Y, BAR_WIDTH, -BAR_HEIGTH * times[i] / maxTime);

      }


  };