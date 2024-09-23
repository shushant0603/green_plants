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

document.querySelector('.group_icon').addEventListener('click', function() {
  // Check if the screen width is 768px or less
  if (window.innerWidth <= 768) {
    const middleContent = document.querySelector('.middle_content2');
    
    // Toggle the visibility of middle_content2
    if (middleContent.style.display === 'none' || middleContent.style.display === '') {
      middleContent.style.display = 'block';  // Show the content
    } else {
      middleContent.style.display = 'none';   // Hide the content
    }
  }
});

