'use strict';

(function() {

  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  function getRandomElement(arr) {
    var randomElement = Math.floor(Math.random() * arr.length);
    var randomArrItem = arr[randomElement];
    return randomArrItem;
  };

  var wizards = [];

  for (var i = 0; i <= 3; i++) {
    var randomNameSurname = getRandomElement(window.constants.WIZARD_NAMES) + ' ' + getRandomElement(window.constants.WIZARD_SURNAMES);
    var randomCoat = getRandomElement(window.constants.WIZARD_COAT);
    var randomEyes = getRandomElement(window.constants.WIZARD_EYES);
    var randomFireBall = getRandomElement(window.constants.WIZARD_FIRE_BALL);
    wizardObj = {
      name: randomNameSurname,
      coatColor: randomCoat,
      eyesColor: randomEyes
    };
    wizards.push(wizardObj);
  };

  var renderWizard = function(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  }
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
  userDialog.querySelector('.setup-similar').classList.remove('hidden');


})();