const carouselDivs = document.querySelectorAll(".img-carousel")

carouselDivs.forEach( div => {
  const img = div.querySelector("img")

  function loaded(){
    div.classList.add("loaded")
  }

  if (img.complete) {
    loaded()
  } else {
    img.addEventListener("load", loaded)
  }
})

const imgCardDivs = document.querySelectorAll(".img-card")

imgCardDivs.forEach( div => {
  const img = div.querySelector("img")

  function loaded(){
    div.classList.add("loaded")
  }

  if (img.complete) {
    loaded()
  } else {
    img.addEventListener("load", loaded)
  }
})

const aimpImgDivs = document.querySelectorAll(".aimp-img")

aimpImgDivs.forEach( div => {
  const img = div.querySelector("img")

  function loaded(){
    div.classList.add("loaded")
  }

  if (img.complete) {
    loaded()
  } else {
    img.addEventListener("load", loaded)
  }
})