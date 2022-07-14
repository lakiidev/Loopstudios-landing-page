let heroTimeline=gsap.timeline()

let interactiveTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".interactive",  
      start: "top 90%",  // trigger viewport
      ease: "power5.inOut",
    }
});
let creationsTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".creations",  
      start: "top center",  // trigger viewport
      ease: "power5.inOut",
    }
});
let footerTl = gsap.timeline({
    scrollTrigger: {
      trigger: "footer",  
      start: "center bottom",  // trigger viewport
      ease: "power5.inOut",
    }
});

heroTimeline.set("nav img",{opacity:0})
heroTimeline.set("li",{opacity:0})
heroTimeline.to("#title",{autoAlpha:1,duration:2})
heroTimeline.from("#title",{y:700,opacity:0,duration:1},.3)


heroTimeline.from("nav img",{y:200,opacity:0,duration:1},">")
heroTimeline.to("nav img",{opacity:1,duration:1,ease:"power3.inOut"},"<")
heroTimeline.from("nav li",{y:200,stagger:0.15,ease:"power5.inOut"},"<20%")
heroTimeline.to("nav li",{opacity:1,stagger:0.15,ease:"power5.inOut"},"<")


interactiveTl.from(".interactive img",{opacity:0,x:-500,duration:1,ease:"power5.inOut"})
interactiveTl.from(".interactive .text",{opacity:0,x:200,duration:1,ease:"power5.inOut"})

creationsTl.from(".heading h2",{opacity:0,y:200,ease:"power3.inOut",duration:1})
creationsTl.from(".heading a",{opacity:0,y:200,ease:"power3.inOut",duration:1},"<25%")
creationsTl.from(".creation",{scale:0.1,opacity:0,y:1000,ease:"power5.inOut",stagger:0.4,duration:2},"<25%")
creationsTl.from(".creation p",{opacity:0,x:200,ease:"power3.inOut",stagger:0.4,duration:2},"<15%")

footerTl.from(".first-line .logo",{opacity:0,y:100,duration:1,ease:"power3.inOut"})
footerTl.from(".first-line li",{scale:0.3,opacity:0,y:100,stagger:0.2},"<10%")
footerTl.from(".second-line a",{scale:0.3,opacity:0,y:100,stagger:0.2},"<30%")
footerTl.from(".second-line p",{opacity:0,y:50,duration:1,ease:"power3.inOut"},"<50%")