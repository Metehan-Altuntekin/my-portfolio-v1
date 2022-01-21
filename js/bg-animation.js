


function CreateBgArea(zone) {
  let bgArea = document.createElement("div")
  bgArea.classList.add("bg-area")

  zone.appendChild(bgArea)
}


function CreateBgParticle(zone, color, opacity) {

  let bgParticle = document.createElementNS("http://www.w3.org/2000/svg", "svg")
  bgParticle.classList.add("bg-particle")
  bgParticle.setAttribute("width", "145")
  bgParticle.setAttribute("height", "61")
  bgParticle.setAttribute("viewBox", "0 0 145 61")
  bgParticle.setAttribute("fill", "none")
  bgParticle.setAttribute("xmlns", "http://www.w3.org/2000/svg")
  bgParticle.addEventListener("click", function(){
    //bgParticle.style.transition = "width 0.1s ease-out"
    bgParticle.style.width = "30vw"
    this.style.transform = "translateX(-50%)"
    setTimeout(() => {
      bgParticle.remove()
    }, 100);
  })
  if(opacity == undefined){opacity = "0.06"} //Default value of opacity if not set in call
  if (color == undefined || color == "purple") {
    bgParticle.classList.add("purple")
    bgParticle.innerHTML = `
      <rect x="23.4559" width="121.544" height="20.678" rx="8" fill="#925EE6" fill-opacity="${opacity}"/>
      <rect y="40.3223" width="123.676" height="20.678" rx="8" fill="#925EE6" fill-opacity="${opacity}"/>
      <path d="M54.375 20.6777H99.1544C95.743 22.2447 94.5508 23.366 93.8516 25.8472V30.4998V35.6693C94.514 37.8663 95.7564 38.8617 99.1544 40.3218H54.375C57.0818 39.2206 58.4412 38.3305 60.267 35.6693V30.4998C60.3079 28.2794 60.3136 27.0335 60.267 24.8133C59.162 22.3634 57.7154 21.5672 54.375 20.6777Z" fill="#925EE6" fill-opacity="${opacity}"/>
      `
  } else if (color == "white") {
    bgParticle.classList.add("white")
    bgParticle.innerHTML = `
      <rect x="17.7941" width="92.2059" height="16.2712" rx="8" fill="white" fill-opacity="${opacity}"/>
      <rect y="31.729" width="93.8235" height="16.2712" rx="8" fill="white" fill-opacity="${opacity}"/>
      <path d="M41.25 16.271H75.2206C72.6326 17.504 71.7282 18.3864 71.1978 20.3388V23.9998V28.0676C71.7003 29.7964 72.6428 30.5797 75.2206 31.7286H41.25C43.3034 30.8621 44.3347 30.1617 45.7198 28.0676V23.9998C45.7508 22.2526 45.7551 21.2722 45.7198 19.5252C44.8815 17.5974 43.7841 16.9709 41.25 16.271Z" fill="white" fill-opacity="${opacity}"/>
      `
  }

  bgParticle.style.left = "-10vw";
  bgParticle.style.top = RandomPos();

  zone.appendChild(bgParticle)

  setTimeout(() => {
    bgParticle.remove();
  }, 15000)
}

function CreateBg(zone, color, opacity) {
  CreateBgArea(zone)
  setInterval(() => {
    CreateBgParticle(zone.getElementsByClassName("bg-area")[0], color, opacity)
  }, 800);
}

CreateBg(document.getElementById("hero"))
CreateBg(document.getElementById("portfolio"))
CreateBg(document.getElementById("services"),"white", "0.15")
CreateBg(document.getElementById("about"))
CreateBg(document.getElementById("contact"),"white", "0.03")