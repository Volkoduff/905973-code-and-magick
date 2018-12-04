var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var ESC_CODE = 27;
var ENTER_CODE = 13;
var WIZARD_FIRE_BALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
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
  var randomNameSurname = getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES);
  var randomCoat = getRandomElement(WIZARD_COAT);
  var randomEyes = getRandomElement(WIZARD_EYES);
  var randomFireBall = getRandomElement(WIZARD_FIRE_BALL);
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
    if (evt.keyCode === ESC_CODE) {
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
};
setupOpen.addEventListener('click', function() {
  setupWindow.classList.remove('hidden');
  document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === ESC_CODE) {
      closePopup();
    }
  });
})
setupOpenIcon.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_CODE) {
    openPopup();
  }
});
saveButton.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_CODE) {
    openPopup();
  }
});
setupClose.addEventListener('click', function() {
  closePopup();
})
setupClose.addEventListener('focus', function() {
  if (evt.keyCode === ENTER_CODE) {
    closePopup();
  }
})
setupClose.addEventListener('focus', function(evt) {
  setupClose.addEventListener('keydown', function(evt) {
    if (evt.keyCode === ENTER_CODE) {
      closePopup();
    }
  });
})

wizardCoat.addEventListener('click', function() {
  var randomCoat = getRandomElement(WIZARD_COAT);
  wizardCoat.style.fill = randomCoat;
})
wizardEyes.addEventListener('click', function() {
  var randomEyes = getRandomElement(WIZARD_EYES);
  wizardEyes.style.fill = randomEyes;
})
wizardFireBall.addEventListener('click', function() {
  var randomFireBall = getRandomElement(WIZARD_FIRE_BALL);
  wizardFireBall.style.backgroundColor = randomFireBall;
})