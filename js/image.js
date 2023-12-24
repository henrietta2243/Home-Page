// Get all image elements with the class "hide" and "skeleton"
var images = document.querySelectorAll(' img.hide');

// Function to remove classes after image is loaded
function removeClassesAfterLoad(image) {
  // Remove the 'hide' class
  image.classList.remove("hide");
  // Remove the 'skeleton' class from the parent container
  image.parentElement.classList.remove("skeleton");
};

// Add 'load' event listener for each image
images.forEach(function(image) {
  image.addEventListener("load", function() {
    // Call the function to remove classes after image is loaded
    removeClassesAfterLoad(image);
  });
  image.addEventListener("error", function(replace) {
    replace.target.src = '/img/404.svg';
  });
});