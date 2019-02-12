'use strict';

(function() {
  var FIREBALL_SIZE = 22;
  var wizardSpeed = 3;
  var wizardWidth = 90;
  var PROPORTION_WIDTH = 1.333
  var COEFFICIENT_HEIGHT = 2 / 3
  var CLOUD_WIDTH = 420;
  var CLOUD_HIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var TEXT_X = 240;
  var TEXT_Y = 30;
  var GAP = 10;
  var TEXT_GAP = 25;
  var BAR_WIDTH = 40;
  var BAR_HEIGTH = 160;
  var BAR_X = 130;
  var BAR_Y = 250;
  var NAME_Y = 265;
  var NUMBERS_GAP = 65;
  var BAR_DISTANCE = 50;
  var BAR_TRAVEL = BAR_DISTANCE + BAR_WIDTH;

  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var ESC_CODE = 27;
  var ENTER_CODE = 13;
  var WIZARD_FIRE_BALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  window.constants = {
    BAR_TRAVEL: BAR_TRAVEL,
    wizardSpeed: wizardSpeed,
    wizardWidth: wizardWidth,
    PROPORTION_WIDTH: PROPORTION_WIDTH,
    COEFFICIENT_HEIGHT: COEFFICIENT_HEIGHT,
    CLOUD_WIDTH: CLOUD_WIDTH,
    CLOUD_HIGHT: CLOUD_HIGHT,
    CLOUD_X: CLOUD_X,
    CLOUD_Y: CLOUD_Y,
    TEXT_X: TEXT_X,
    TEXT_Y: TEXT_Y,
    GAP: GAP,
    TEXT_GAP: TEXT_GAP,
    BAR_WIDTH: BAR_WIDTH,
    BAR_HEIGTH: BAR_HEIGTH,
    BAR_X: BAR_X,
    BAR_Y: BAR_Y,
    NAME_Y: NAME_Y,
    NUMBERS_GAP: NUMBERS_GAP,
    BAR_DISTANCE: BAR_DISTANCE,
    WIZARD_NAMES: WIZARD_NAMES,
    WIZARD_SURNAMES: WIZARD_SURNAMES,
    WIZARD_COAT: WIZARD_COAT,
    WIZARD_EYES: WIZARD_EYES,
    ESC_CODE: ESC_CODE,
    ENTER_CODE: ENTER_CODE,
    WIZARD_FIRE_BALL: WIZARD_FIRE_BALL
  }

})();