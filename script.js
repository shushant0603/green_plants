var tl=gsap.timeline()

tl.from("#logo",{
    y:-50,
    opacity:0,
    duration:1,
    delay:1,
    stagger:0.1
})
tl.from("#middle_content li",{
    y:-50,
    opacity:0,
    duration:1,
    stagger:0.1
})
tl.from("#icons img",{
    y:-50,
    opacity:0,
    duration:1,
    stagger:0.1
})
tl.from("#container",{
    y:-50,
    opacity:0,
    duration:2

})
