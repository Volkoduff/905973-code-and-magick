(function() {
  var LOAD_WIZARDS = 4;
  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  window.backend.load(function(serverData) {
    var wizards = serverData;
    wizardsApend(wizards);
  });

  var renderWizard = function(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  }

  var wizardsApend = function(wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < LOAD_WIZARDS; i++) {
      fragment.appendChild(renderWizard(wizards[i]))
    }
    similarListElement.appendChild(fragment);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  }

})()