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

const openNsfwBtn = document.querySelectorAll('[data-nsfw-target]')
const remNuxtBtn = document.querySelectorAll('[data-btn-rem]')

openNsfwBtn.forEach(button => {
    button.addEventListener('click', () => {
        const nsfw = document.querySelector(button.dataset.nsfwTarget)
        openNsfw(nsfw)
    })
})

remNuxtBtn.forEach(button => {
    button.addEventListener('click', () =>{
        const nuxt = document.querySelector(button.dataset.btnRem)
        remNuxt(nuxt)
    })
})

function openNsfw(nsfw){
    if (nsfw == null) return
    nsfw.classList.remove('nsfw')
    nsfw.classList.remove('nsfw1')
}

function remNuxt(nuxt){
    if (nuxt == null) return
    nuxt.classList.remove('show')
    nuxt.classList.add('nuxt1')
}

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('.nzxt')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})