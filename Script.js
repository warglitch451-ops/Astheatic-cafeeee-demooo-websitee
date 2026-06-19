// ==========================
// LUXE CAFÉ SCRIPT
// ==========================

// PAGE LOADER

window.addEventListener("load", () => {
document.body.classList.add("loaded");
});

// NAVBAR SCROLL EFFECT

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){

navbar.style.background = "rgba(0,0,0,0.95)";
navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

}else{

navbar.style.background = "rgba(0,0,0,0.85)";
navbar.style.boxShadow = "none";

}

});

// SCROLL REVEAL

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll(
".stat-card,.feature-card,.review-box,.menu-card,.gallery-card"
).forEach((el)=>{

observer.observe(el);

});

// BACK TO TOP BUTTON

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){

topBtn.style.display = "flex";

}else{

topBtn.style.display = "none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

// ACTIVE NAV LINK

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

if(link.href === window.location.href){

link.classList.add("active");

}

});

// RESERVATION FORM

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Thank you! Your reservation request has been received."
);

form.reset();

});

}
