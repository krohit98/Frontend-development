const next=document.getElementById("next");
const prev=document.getElementById("prev");
const proContainer=document.getElementById("project-container");
const image=[...document.getElementsByClassName("project-img")];
const detail=[...document.getElementsByClassName("project-details")];
const project=[...document.getElementsByClassName("projects")];
const certificate=[...document.getElementsByClassName("cert-container")];
const submit=document.getElementById("submitButton");
const nav=document.getElementById("navigator");
const navlinks=document.getElementById("navigator-links");
const position=document.getElementById("aboutmebr");
const body=document.getElementsByTagName("body")[0];
let click=0;

next.addEventListener("click",goNext);
prev.addEventListener("click",goPrev);
image.forEach(i=>i.addEventListener("mouseenter",showDetails));
image.forEach(i=>i.addEventListener("mouseleave",hideDetails));
detail.forEach(i=>i.addEventListener("mouseenter",showDetails));
detail.forEach(i=>i.addEventListener("mouseleave",hideDetails));
project.forEach(i=>i.addEventListener("mouseleave",removeAnimation));
certificate.forEach(i=>i.addEventListener("mouseenter",showButton));
certificate.forEach(i=>i.addEventListener("mouseleave",hideButton));
submit.addEventListener("click",submitForm);
nav.addEventListener("mouseenter",showNavigator);
nav.addEventListener("mouseleave",hideNavigator);
navlinks.addEventListener("click",hideNavigator);
body.addEventListener("scroll",navigatorAppear);

function goNext(){
    proContainer.scrollLeft+=(image[0].offsetWidth)+(0.01*window.innerWidth);
    setTimeout(function(){
    if(proContainer.scrollLeft>0)
        prev.style.setProperty("visibility","visible");
    if(proContainer.scrollWidth-proContainer.scrollLeft<=proContainer.offsetWidth+image[0].offsetWidth)
        next.style.setProperty("visibility","hidden");
    },200);
}

function goPrev(){
    proContainer.scrollLeft-=(image[0].offsetWidth)+(0.01*window.innerWidth);
    setTimeout(function(){
    if(proContainer.scrollLeft<=image[0].offsetWidth)
        prev.style.setProperty("visibility","hidden");
    if(proContainer.scrollWidth-proContainer.scrollLeft>proContainer.offsetWidth)
        next.style.setProperty("visibility","visible");
    },200);
    
}

const proButton=document.createElement("div");
proButton.className="project-button";
const codeButton=document.createElement("button");
const siteButton=document.createElement("button");
codeButton.className="projButtons";
siteButton.className="projButtons";
codeButton.textContent="View Code";
siteButton.textContent="Visit Site";
proButton.appendChild(codeButton);
proButton.appendChild(siteButton);

function showDetails(e){
    let sourceCode=e.target.parentElement.querySelector("#scode").innerHTML;
    let webPage=e.target.parentElement.querySelector("#page").innerHTML;
    codeButton.setAttribute("onclick","window.open('"+sourceCode+"')");
    siteButton.setAttribute("onclick","window.open('"+webPage+"')");
    if(e.target.className=="project-img")
    {
        e.target.nextElementSibling.style.setProperty('animation-name','fadein');
        e.target.nextElementSibling.style.setProperty('animation-duration','0.5s');
        e.target.nextElementSibling.appendChild(proButton);
        e.target.nextElementSibling.style.setProperty('visibility','visible');
    }
    if(e.target.className=="project-details")
    {e.target.appendChild(proButton);
    e.target.style.setProperty('visibility','visible');}
}

function hideDetails(e){
    if(e.target.className=='project-img')
    {
        e.target.nextElementSibling.style.setProperty('visibility','hidden');
    }
    if(e.target.className=='project-details')
    {
        e.target.style.setProperty('visibility','hidden');
    }
}

function removeAnimation(e){
    e.target.querySelector(".project-details").style.removeProperty('animation-name','fadein');
}

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