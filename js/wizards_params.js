(function() {
  var fireballSize = 22;
  var wizardSpeed = 3;
  var wizardWidth = 90;
  var PROPORTION_WIDTH = 1.333;
  var COEFFICIENT_HEIGHT = 2 / 3;

  var getWizardHeight = function() {
    return PROPORTION_WIDTH * wizardWidth;
  }

  var getFireballSpeed = function(left) {
    return left ? 5 : 2;
  }
  var getWizardX = function(width) {
    return (width - wizardWidth) / 2;
  }

  var getWizardY = function(height) {
    return (height - getWizardHeight()) * COEFFICIENT_HEIGHT;
  }
  window.params = {
    getWizardHeight: getWizardHeight,
    getFireballSpeed: getFireballSpeed,
    getWizardX: getWizardX,
    getWizardY: getWizardY,
    fireballSize: fireballSize,
    wizardSpeed: wizardSpeed,
    wizardWidth: wizardWidth
  }
})()