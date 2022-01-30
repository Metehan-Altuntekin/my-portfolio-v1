const header = document.getElementById("header")
const hero = document.getElementById("hero")
const headerScrollOptions = {
  threshold: 0.25
}
const HeaderScroll = new IntersectionObserver((elements) => {
  elements.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

}, headerScrollOptions)

HeaderScroll.observe(hero)


//Header nav animation

const SectionAppearOptions = {
  rootMargin: `-50% 0px -49% 0px`
}
const SectionAppear = new IntersectionObserver((elements) => {
  elements.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry.target.id)
      if(entry.target.id == "hero") return;
      document.querySelector(`header nav a[href="#${entry.target.id}"]`).classList.add("active")
    } else{
      if(entry.target.id == "hero") return;
      document.querySelector(`header nav a[href="#${entry.target.id}"]`).classList.remove("active")
    }
  })
}, SectionAppearOptions)

const sections = document.querySelectorAll("main > section")

sections.forEach((section) => {
  SectionAppear.observe(section)
})