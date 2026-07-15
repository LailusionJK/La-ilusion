// Smooth Fade-In beim Scrollen

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach((section)=>{

section.classList.add("hidden");

observer.observe(section);

});


// Header beim Scrollen

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.padding="12px 60px";
header.style.background="rgba(246,242,232,.98)";

}else{

header.style.padding="20px 60px";
header.style.background="rgba(246,242,232,.95)";

}

});


// Galerie Animation

const images=document.querySelectorAll(".grid img");

images.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.05) rotate(.5deg)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});


// Hero Text Animation

window.onload=()=>{

document.querySelector(".hero-text").style.opacity="1";

};
