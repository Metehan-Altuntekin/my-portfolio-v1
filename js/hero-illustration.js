const frameCarried = document.getElementById("Frame-Carried")
const craneString = document.getElementById("Crane-String")
const craneCarryPlatform = document.getElementById("Crane-Carry-Platform")
/* 
frameCarried.style.transform = "translateX(10%)"
craneString.style.transform = "translateX(10%)"
craneCarryPlatform.style.transform = "translateX(10%)" */


function StartHeroAnim(){
  frameCarried.style.animationPlayState = "running"
  craneString.style.animationPlayState = "running"
  craneCarryPlatform.style.animationPlayState = "running"
}
function StopHeroAnim(){
  frameCarried.style.animationPlayState = "paused"
  craneString.style.animationPlayState = "paused"
  craneCarryPlatform.style.animationPlayState = "paused"
}
function StartStopHeroAnim() {
  if (frameCarried.style.animationPlayState == "running") {
    StopHeroAnim()
  } else {
    StartHeroAnim()
  }
}
/* 
frameCarried.addEventListener("mouseover", StopHeroAnim)
frameCarried.addEventListener("mouseout", StartHeroAnim) */
frameCarried.addEventListener("click", StartStopHeroAnim)