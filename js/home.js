// Get all elements with class "aimp-img"
var aimpImages = document.querySelectorAll('.aimp-img');

// Function to remove classes after image loaded
  function removeClassesAfterLoad(imgElement) {
// Remove "skeleton" class from parent div
    imgElement.parentNode.classList.remove('skeleton');

// Remove "hide" class from the image
    imgElement.classList.remove('hide');
  }

// Attach load event to each img element
  aimpImages.forEach(function(aimpImg) {
    var imgElement = aimpImg.querySelector('.aimp-img');
    
    if (imgElement) {
      imgElement.addEventListener('load', function() {
// Remove classes after image has loaded
        removeClassesAfterLoad(imgElement);
      });
    };
    aimpImg.addEventListener("error", function(replace) {
    replace.target.src = '/img/404.svg';
    });
  });

  // Get All elements with class "img-card"
  var imgCards = document.querySelectorAll(".img-card");

  imgCards.forEach(function(imgCard) {
    var imgElement = imgCard.querySelector(".img-card");

    if (imgElement) {
      imgElement.addEventListener("load", function() {
        removeClassesAfterLoad(imgElement);
      });
    };
    imgCard.addEventListener("error", function(replace) {
      replace.target.src = "/img/404.svg";
    });
  });

  // Get all elements with class "img-carousel"
  var imgCarousels = document.querySelectorAll(".img-carousel");

  imgCarousels.forEach(function(imgCarousel) {
    var imgElement = imgCarousel.querySelector(".img-carousel");

    if (imgElement) {
      imgElement.addEventListener("load", function() {
        removeClassesAfterLoad(imgElement);
      });
    };
    imgCarousel.addEventListener("error", function(replace) {
      replace.target.src = "/img/404.svg";
    });
  });