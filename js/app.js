const pages=document.querySelectorAll(".page");

let current=0;

function nextPage(){

pages[current].classList.remove("active");

current++;

pages[current].classList.add("active");

}