let elBtn = document.querySelector(".js-btn");
let elModal = document.querySelector(".modal");
let elOk = document.querySelector(".ok")
let elno = document.querySelector(".no")


elBtn.addEventListener("click", () => {
  elModal.classList.add("paydo-bol");
});

elOk.addEventListener("click",()=>{
  elModal.classList.remove("paydo-bol")
})
elno.addEventListener("click",()=>{
  elModal.classList.remove("paydo-bol")
})