'use strict';

(function() {
  function getWizardHeight() {
    return window.constants.PROPORTION_WIDTH * window.constants.wizardWidth;
  }

  function getFireballSpeed(left) {
    return left ? 5 : 2;
  }

  function getWizardX(width) {
    return (width - window.constants.wizardWidth) / 2;
  }

  function getWizardY(height) {
    return (height - getWizardHeight()) * window.constants.COEFFICIENT_HEIGHT;
  }

  function renderCloud(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, window.constants.CLOUD_WIDTH, window.constants.CLOUD_HIGHT);
  };


  function getMaxElement(arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  window.utilities = {
    getWizardHeight: getWizardHeight,
    getFireballSpeed: getFireballSpeed,
    getWizardY: getWizardY,
    getWizardX: getWizardX,
    renderCloud: renderCloud,
    getMaxElement: getMaxElement
  }

})();