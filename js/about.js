const certificatesContainer = document.querySelector("#about article.certificates ul")

const certNavLeft = document.querySelector("#about .certificates button.left")
const certNavRight = document.querySelector("#about .certificates button.right")

const certificate = document.querySelectorAll("#about .certificates ul li")[0]

certificatesContainer.addEventListener("wheel", (event)=>{
  event.preventDefault();
  
  //Get the scroll direction and scroll by size of one element in our media scroller for responsive consistency
  certificatesContainer.scrollLeft += (Math.sign(event.deltaY) * parseInt(getComputedStyle(certificate).width)) 
})

certNavLeft.addEventListener("click", ()=>{
  certificatesContainer.scrollLeft +=  - parseInt(getComputedStyle(certificate).width)
})
certNavRight.addEventListener("click", ()=>{
  certificatesContainer.scrollLeft += parseInt(getComputedStyle(certificate).width)
})