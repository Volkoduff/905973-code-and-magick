(function() {
  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var wizards = [];

  for (var i = 0; i <= 3; i++) {
    var randomNameSurname = window.utilities.getRandomElement(WIZARD_NAMES) + ' ' + window.utilities.getRandomElement(WIZARD_SURNAMES);
    var randomCoat = window.utilities.getRandomElement(WIZARD_COAT);
    var randomEyes = window.utilities.getRandomElement(WIZARD_EYES);
    var randomFireBall = window.utilities.getRandomElement(WIZARD_FIRE_BALL);
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
})()