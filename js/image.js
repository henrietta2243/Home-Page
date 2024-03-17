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

  function notFound(){
    div.style.backgroundImage='url("/Home-Page/img/404.png")';
  }

  if (img.error) {
    notFound()
  } else {
    img.addEventListener("error", notFound)
  }
})

const btn1s = document.getElementById("btn1")
btn1s.addEventListener("click", function(){
  const img1s = document.getElementById("img1")
  img1s.classList.remove("nsfw")
  btn1s.classList.remove("show")
})

const btn2s = document.getElementById("btn2")
btn2s.addEventListener("click", function(){
  const img2s = document.getElementById("img2")
  img2s.classList.remove("nsfw")
  btn2s.classList.remove("show")
})

const btn3s = document.getElementById("btn3")
btn3s.addEventListener("click", function(){
  const img3s = document.getElementById("img3")
  img3s.classList.remove("nsfw")
  btn3s.classList.remove("show")
})

const btn4s = document.getElementById("btn4")
btn4s.addEventListener("click", function(){
  const img4s = document.getElementById("img4")
  img4s.classList.remove("nsfw")
  btn4s.classList.remove("show")
})

const btn5 = document.getElementById('btn5')
btn5.addEventListener('click', function(){
  const img5 = document.getElementById('img5')
  img5.classList.remove("nsfw")
  btn5.classList.remove("show")
})