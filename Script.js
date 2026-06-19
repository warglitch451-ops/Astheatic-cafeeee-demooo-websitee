// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.background = "rgba(0,0,0,0.95)";
navbar.style.padding = "15px 8%";

}else{

navbar.style.background = "rgba(0,0,0,0.85)";
navbar.style.padding = "20px 8%";

}

});

// SCROLL REVEAL ANIMATION

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".stat-card,.feature-card,.review-box,.menu-card").forEach((el)=>{

observer.observe(el);

});

// BACK TO TOP BUTTON

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){

topBtn.style.display = "block";

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

// LOADING EFFECT

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});
