const header = document.getElementById("header")
const hero = document.getElementById("hero")
const headerScrollOptions = {
  threshold: 0.25
}
const HeaderScroll = new IntersectionObserver((elements) => {
  elements.forEach(entry =>{

    if(!entry.isIntersecting){
      header.classList.add("scrolled")
    } else{
      header.classList.remove("scrolled")
    }
  })  

}, headerScrollOptions)

HeaderScroll.observe(hero)