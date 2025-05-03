var tl = gsap.timeline();
var menu = document.querySelector(".nav i");
var close = document.querySelector(".full i");

tl.to(".full",{
    right: "0%",
    duration: 0.8,
})
tl.from(".full h4",{
    x:100,
    duration:0.4,
    stagger:0.1,
    opacity:0,
})

tl.from(".full i",{
    opacity:0,
})

tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})

close.addEventListener("click",function(){
    tl.reverse()
})