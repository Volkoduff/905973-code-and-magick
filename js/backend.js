'use strict';

(function() {
  var form = document.querySelector('.setup-wizard-form');
  var userDialog = document.querySelector('.setup');
  var URL = 'https://js.dump.academy/code-and-magick/data';

  // отправка данных
  var save = function(data, onSuccess) {
    var URL = 'https://js.dump.academy/code-and-magick';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function() {
      onSuccess(xhr.response);
    })
    xhr.open('POST', URL);
    xhr.send(data);
  }

  form.addEventListener('submit', function(evt) {
    save(new FormData(form), function(response) {
      userDialog.classList.add('hidden');
    });
    evt.preventDefault();
  });

  //получение данных
  var load = function(onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json'; 
    xhr.addEventListener('load', function(evt) {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    })
    xhr.open('GET', URL);
    xhr.send();
  }

  window.backend = {
    load: load,
    save: save
  }

})()