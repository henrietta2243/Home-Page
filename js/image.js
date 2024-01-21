var images = document.querySelectorAll(' .hide');

function removeClassesAfterLoad(image) {
  image.classList.remove("hide");
  image.parentElement.classList.remove("skeleton");
};

images.forEach(function(image) {
  image.addEventListener("load", function() {
    image.style.display = 'block';
  });
  image.addEventListener("error", function(replace) {
    replace.target.src = '/Home-Page/img/404.svg';
  });
});
