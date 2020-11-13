
const certificate=[...document.getElementsByClassName("cert-container")];
const submit=document.getElementById("submitButton");
const nav=document.getElementById("navigator");
const navlinks=document.getElementById("navigator-links");
const position=document.getElementById("aboutmebr");
const body=document.getElementsByTagName("body")[0];
const video=document.getElementById("videoBackground");

certificate.forEach(i=>i.addEventListener("mouseenter",showButton));
certificate.forEach(i=>i.addEventListener("mouseleave",hideButton));
submit.addEventListener("click",submitForm);
nav.addEventListener("mouseenter",showNavigator);
nav.addEventListener("mouseleave",hideNavigator);
navlinks.addEventListener("click",hideNavigator);
body.addEventListener("scroll",navigatorAppear);


function showButton(e){
    e.target.querySelector(".verify-btn").style.setProperty('visibility','visible');
}

function hideButton(e){
    e.target.querySelector(".verify-btn").style.setProperty('visibility','hidden');
}

function submitForm(){
    submit.setAttribute("type","submit");
    setTimeout(clearForm,1000);
}

function clearForm(){
    document.getElementById("contact-form").reset();
}

function navigatorAppear(){
if(position.getBoundingClientRect().top<=5.265625)
{
    nav.style.setProperty('visibility','visible');
}
if(position.getBoundingClientRect().top>5.265625)
{
    nav.style.setProperty('visibility','hidden');
}
}

function showNavigator(){
    if(window.innerWidth>=950)
        nav.style.width="45vw";
    else
        nav.style.width="95vw";
    navlinks.style.setProperty('visibility','visible');
    document.getElementById("navigatorIcon").style.setProperty('transform','rotate(-90deg)');
}

function hideNavigator(){
    nav.style.width="5vmin";
    navlinks.style.setProperty('visibility','hidden');
    document.getElementById("navigatorIcon").style.setProperty('transform','rotate(0deg)');
}

video.src="webpages/homepage.mp4";