let elBody = document.querySelector("body");
let elBtn = document.querySelector(".changer");

elBtn.addEventListener('click', function(){
  elBody.classList.toggle("dark");
})
function myFunction(x) {
  x.classList.toggle("change");
}