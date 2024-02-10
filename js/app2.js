let hiddenConnect = document.querySelector(".hidden-connect")
let connectBtn = document.querySelector(".header-btn")
let bgDel = document.querySelector(".bg-del")
let inptext = document.querySelector("#inptext")
let inptel = document.querySelector("#inptel")
let sendBtn = document.querySelector(".send-btn")

bgDel.addEventListener("click" , function(){
    hiddenConnect.classList.add("none")
})
connectBtn.addEventListener('click' , function(){
    hiddenConnect.classList.remove("none")
})

let projectBox = document.querySelector(".project-box-img")
let arrowBtn = document.querySelector(".see-more-arrow")
let arrowIcon = document.querySelector(".arrow")

arrowBtn.addEventListener("click" , function(){
    projectBox.classList.toggle("project-height-1100px")
    arrowBtn.focus()
    arrowIcon.classList.toggle("arrow-active")
    arrowBtn.focus()
})