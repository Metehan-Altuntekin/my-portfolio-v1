/* window.addEventListener('scroll', ()=>{
  const scrolled = window.pageYOffset;
  console.log(scrolled)
}) */


// This file of script is for elements to do fade-in animation on scroll into viewport

const appearOptions = {
  root: null,  // viewport
  threshold: .60,  //default is 0 and can be set between 0 and 1. 1 means it should enter completely
  rootMargin: "0px"
}


const Appear = new IntersectionObserver((elements, Appear) =>{
  elements.forEach(entry => {
    //console.log(entry)

    if(entry.isIntersecting){
      entry.target.classList.add("appear")
      Appear.unobserve(entry.target)
    }
  });
}, appearOptions)

const faders = document.querySelectorAll(".fade-in")

faders.forEach((fader)=>{
  Appear.observe(fader)
  if(fader.hasAttribute("data-anim-delay") == true){      //Add delay to fade-in animations based on levels
    let delayLevel = fader.getAttribute("data-anim-delay")
    fader.style.transitionDelay = `${delayLevel * 75}ms` 
  }
})


const sliders = document.querySelectorAll(".slider")

sliders.forEach((slider)=>{
  slider.parentElement.style.overflow = "hidden"
})