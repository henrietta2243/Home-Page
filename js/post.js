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

const openModalBtn = document.querySelectorAll('[data-modal-target]')
const closeModalBtn = document.querySelectorAll('[data-close-btn]')
const overlay = document.getElementById('overlay')

openModalBtn.forEach(button => {
    button.addEventListener('click', () =>{
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalBtn.forEach(button => {
    button.addEventListener('click', () =>{
        const modal = button.closest('.mdls')
        closeModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modal = document.querySelectorAll('.active')
    modal.forEach( modal => {
        closeModal(modal)
    })
})

function openModal(modal){
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal){
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}