'use strict';
  
  (function() {


    var renderCloud = function(ctx, x, y, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HIGHT);
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
          var colorsArr = ['rgba(50, 60, 255, 1)', 'rgba(50, 150, 255, 1)', 'rgba(50, 100, 255, 1)', 'rgba(50, 200, 255, 1)', 'rgba(50, 250, 255, 1)'];

          function getRandomNum() {
            return Math.floor(Math.random() * 4)
          }
          ctx.fillStyle = colorsArr[getRandomNum()]

        }

        var maxTime = window.utilities.getMaxElement(times);
        ctx.fillRect(BAR_X + BAR_TRAVEL * i, BAR_Y, BAR_WIDTH, -BAR_HEIGTH * times[i] / maxTime);

        ctx.fillStyle = '#000';
        ctx.fillText(players[i], BAR_X + BAR_TRAVEL * i, NAME_Y);
        ctx.fillText(Math.ceil(times[i]), BAR_X + BAR_TRAVEL * i, BAR_Y - GAP - (BAR_HEIGTH * times[i] / maxTime));

      }
    };
  })()