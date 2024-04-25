let elBtn = document.querySelector(".js-btn");
let elModal = document.querySelector(".modal");
let elOk = document.querySelector(".ok")
let elno = document.querySelector(".no")

let elBtn2 = document.querySelector(".js-btn2");
let elModal2 = document.querySelector(".modal2");

elBtn.addEventListener("click", () => {
  elModal.classList.add("paydo-bol");
});

elOk.addEventListener("click",()=>{
  elModal.classList.remove("paydo-bol")
})
elno.addEventListener("click",()=>{
  elModal.classList.remove("paydo-bol")
})


elBtn2.addEventListener("click", () => {
  elModal2.classList.add("paydo-bol");
});

elModal2.addEventListener("click",()=>{
  elModal2.classList.remove("paydo-bol")
})
