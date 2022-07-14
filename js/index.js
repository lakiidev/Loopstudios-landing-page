window.addEventListener('load', (event) => {
    let loads=document.querySelector("#title")
    loads.classList.add("load")
});
let showMenu=()=>
{
    let burger=document.querySelector(".mobile-menu")
    let close=document.querySelector(".close")
    let navLinks=document.querySelector(".nav-links")
    let hero=document.querySelector(".hero")
    let herotext=document.querySelector(".text")
    let wind = window.matchMedia("(max-width: 800px)")
    let tl=gsap.timeline();
    burger.addEventListener("click",()=>
    {
        hero.style.setProperty("background-image","none")
        hero.style.setProperty("background-color","#000000");
        burger.style.display="none";
        close.style.display="block";
        herotext.style.display="none";
        navLinks.style.display="flex"
        tl.from(".nav-links li",{oapcity:1,x:-300,stagger:0.5,duration:.5})
    })
    close.addEventListener("click",()=>
    {
        hero.style.setProperty("background-image","")
        hero.style.setProperty("background-color","transparent");
        burger.style.display="block";
        close.style.display="none";
        herotext.style.display="flex";
        navLinks.style.display="none";
    })
    document.addEventListener('scroll',()=>
    {
        match(wind,navLinks,hero,close, burger,herotext);
    })
}
showMenu();
wind.addListener(match)
function match(wind,navLinks,hero,close, burger,herotext)
{
    if (wind.matches) { // If media query matches
        hero.style.setProperty("background-image","")
        hero.style.setProperty("background-color","transparent");
        burger.style.display="block";
        close.style.display="none";
        herotext.style.display="flex";
        navLinks.style.display="none";
    } else {
        navLinks.style.display="flex";
        burger.style.display="none"
    }
}

