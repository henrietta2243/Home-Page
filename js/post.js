const themesDivs = document.querySelectorAll(".themes-image")

themesDivs.forEach(div => {
    const img = div.querySelector("img")

    function loaded(){
        div.classList.add("loaded")
    }

    if (img.complete) {
        loaded()
    } else {
        img.addEventListener("load", loaded)
    }

    function notFound(){
        div.style.backgroundImage='url("/Home-Page/img/404.png")';
    }

    if (img.error){
        notFound()
    } else {
        img.addEventListener("error", notFound)
    }
})

const relDivs = document.querySelectorAll(".rel-image")

relDivs.forEach(div => {
    const img = div.querySelector("img")

    function loaded(){
        div.classList.add("loaded")
    }

    if (img.complete) {
        loaded()
    } else {
        img.addEventListener("load", loaded)
    }

    function notFound() {
        div.style.backgroundImage='url("/Home-Page/img/404.png")';
    }

    if (img.error){
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
