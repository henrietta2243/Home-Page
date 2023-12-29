var aimpImages = document.querySelectorAll('.aimp-img');

  function removeClassesAfterLoad(aimpImage) {
    aimpImage.parentNode.classList.remove('skeleton');

    aimpImage.classList.remove('hide');
  }

  aimpImages.forEach(function(aimpImg) {
    var aimpImage = aimpImg.querySelector('.aimp-img');
    
    if (aimpImage) {
      aimpImage.addEventListener('load', function() {
        removeClassesAfterLoad(aimpImage);
      });
    };
    aimpImg.addEventListener("error", function(replace) {
    replace.target.src = '/Home-page/img/404.svg';
    });
  });

  
  var imgCards = document.querySelectorAll(".img-card");

  imgCards.forEach(function(imgCard) {
    var card = imgCard.querySelector(".img-card");

    if (card) {
      card.addEventListener("load", function() {
        removeClassesAfterLoad(card);
      });
    };
    imgCard.addEventListener("error", function(replace) {
      replace.target.src = "/Home-Page/img/404.svg";
    });
  });

  var imgCarousels = document.querySelectorAll(".img-carousel");

  imgCarousels.forEach(function(imgCarousel) {
    var imgElement = imgCarousel.querySelector(".img-carousel");

    if (imgElement) {
      imgElement.addEventListener("load", function() {
        removeClassesAfterLoad(imgElement);
      });
    };
    imgCarousel.addEventListener("error", function(replace) {
      replace.target.src = "/Home-Page/img/404.svg";
    });
  });
