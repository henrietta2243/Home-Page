var images = document.querySelectorAll(' .hide');

function removeClassesAfterLoad(image) {
  image.classList.remove("hide");
  image.parentElement.classList.remove("skeleton");
};

images.forEach(function(image) {
  image.addEventListener("load", function() {
    removeClassesAfterLoad(image);
  });
  image.addEventListener("error", function(replace) {
    replace.target.src = '/img/404.svg';
  });
});
