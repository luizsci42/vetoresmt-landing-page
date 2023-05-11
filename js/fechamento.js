document.addEventListener('DOMContentLoaded', function() {
  var divs = document.getElementsByClassName('imagem-expandida');
  for (var i = 0; i < divs.length; i++) {
      divs[i].addEventListener('click', function() {
          window.history.back();
      });
  }
});
