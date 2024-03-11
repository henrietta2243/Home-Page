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