  window.renderStatistics = function(ctx, players, times) {
      window.utilities.renderCloud(ctx, window.constants.CLOUD_X + window.constants.GAP, window.constants.CLOUD_Y + window.constants.GAP, 'rgba(0, 0, 0, 0.7)')
      window.utilities.renderCloud(ctx, window.constants.CLOUD_X, window.constants.CLOUD_Y, '#fff')

      // рисуем текст
      ctx.font = 'Bold 16px PT Mono';
      ctx.fillStyle = '#000';
      ctx.fillText('Ура вы победили!', window.constants.TEXT_X, window.constants.TEXT_Y);
      ctx.fillText('Список результатов:', window.constants.TEXT_X, window.constants.TEXT_Y + window.constants.TEXT_GAP);

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
          ctx.fillRect(window.constants.BAR_X + window.constants.BAR_TRAVEL * i, window.constants.BAR_Y, window.constants.BAR_WIDTH, -window.constants.BAR_HEIGTH * times[i] / maxTime);

          ctx.fillStyle = '#000';
          ctx.fillText(players[i], window.constants.BAR_X + window.constants.BAR_TRAVEL * i, window.constants.NAME_Y);
          ctx.fillText(Math.ceil(times[i]), window.constants.BAR_X + window.constants.BAR_TRAVEL * i, window.constants.BAR_Y - window.constants.GAP - (window.constants.BAR_HEIGTH * times[i] / maxTime));

      }
  };