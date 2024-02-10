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
