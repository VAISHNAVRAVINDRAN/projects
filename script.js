const menu=document.querySelector(".menu");
const close=document.querySelector(".close");
const pop=document.querySelector(".popular");
const items=document.querySelector(".nav-items");
menu.addEventListener("click", open_menu);
close.addEventListener("click", close_menu);
function open_menu() {
items.style.width="600px";
}
function close_menu() {
items.style.width="0px";
}
for(var i=1;i<=5;i++) {
const new_div=document.createElement("div");
const inner_div=document.createElement("div");
const profiles=document.createElement("div");
new_div.classList.add("ndiv");
inner_div.classList.add("indiv");
profiles.classList.add("profiles");
new_div.appendChild(inner_div);
new_div.appendChild(profiles);
pop.appendChild(new_div);
}
