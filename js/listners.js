'use strict';

(function() {

  var setupClose = document.querySelector('.setup-close');
  var setupOpen = document.querySelector('.setup-open');
  var setupWindow = document.querySelector('.setup');
  var setupOpenIcon = document.querySelector('.setup-open-icon');
  var inputDialog = document.querySelector('.setup-user-name');
  var saveButton = document.querySelector('.setup-submit');

  var setupWizard = document.querySelector('.setup-wizard')
  var wizardCoat = setupWizard.querySelector('.wizard-coat')
  var wizardEyes = setupWizard.querySelector('.wizard-eyes')
  var wizardFireBall = document.querySelector('.setup-fireball-wrap')

  var openPopup = function() {
    setupWindow.classList.remove('hidden')
    document.addEventListener('keydown', function(evt) {
      if (evt.keyCode === window.constants.ESC_CODE) {
        setupWindow.classList.add('hidden');

      }
    });
  }
  var onPopupEscPress = function(evt) {
    if (evt.keyCode === 27) {
      closePopup();
    }
  };
  var openPopup = function() {
    setupWindow.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };
  var closePopup = function() {
    setupWindow.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    setupWindow.style = 'top: 80px; left: 50%';
  };
  setupOpen.addEventListener('click', function() {
    setupWindow.classList.remove('hidden');
    document.addEventListener('keydown', function(evt) {
      if (evt.keyCode === window.constants.ESC_CODE) {
        closePopup();
      }
    });
  })
  setupOpenIcon.addEventListener('keydown', function(evt) {
    if (evt.keyCode === window.constants.ENTER_CODE) {
      openPopup();
    }
  });
  saveButton.addEventListener('keydown', function(evt) {
    if (evt.keyCode === window.constants.ENTER_CODE) {
      openPopup();
    }
  });
  setupClose.addEventListener('click', function() {
    closePopup();
  })

  wizardCoat.addEventListener('click', function() {
    var randomCoat = getRandomElement(window.constants.WIZARD_COAT);
    wizardCoat.style.fill = randomCoat;
  })
  wizardEyes.addEventListener('click', function() {
    var randomEyes = getRandomElement(window.constants.WIZARD_EYES);
    wizardEyes.style.fill = randomEyes;
  })
  wizardFireBall.addEventListener('click', function() {
    var randomFireBall = getRandomElement(window.constants.WIZARD_FIRE_BALL);
    wizardFireBall.style.backgroundColor = randomFireBall;
  })

})()