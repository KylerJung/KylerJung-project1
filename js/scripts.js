const menu = document.querySelector(".mobileMenu")
const ul = document.querySelector(".navUl")

// add event listener
menu.addEventListener("click", function(){
  ul.classList.toggle("click")
});