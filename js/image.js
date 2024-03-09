var images = document.querySelectorAll('img');
const themesDivs = document.querySelectorAll(".themes")

themesDivs.forEach(div => {
  const img = div.querySelector("img")

  function loaded(){
    div.classList.add("loaded")
  }

  if (img.complete) {
    loaded()
  }else {
    img.addEventListener("load", loaded)
  }
})

images.forEach(function(image) {
  image.addEventListener("error", function(replace) {
    replace.target.src = '/Home-Page/img/404.svg';
  });
});

