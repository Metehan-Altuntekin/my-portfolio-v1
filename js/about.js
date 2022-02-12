//--------------  Tools & Skills  ------------------

const skills = {
  buttonsArea: document.querySelector("#about .tools .buttons"),
  buttons: Array.from(document.querySelectorAll("#about .tools .buttons button")),
  buttonActiveBg: document.querySelector("#about .tools .buttons .active-bg"),
  skillSorts: ["design", "frontend", "backend"],
  skills: Array.from(document.querySelectorAll("#about .tools ul li"))
}

skills.buttons.forEach((item, index, array) => {
  item.addEventListener("click", () => {
    if (array.indexOf(item) == 0) {
      skills.buttonActiveBg.style.left = "0"
    }
    if (array.indexOf(item) == 1) {
      skills.buttonActiveBg.style.left = `calc((100% / 6)*2)`
    }
    if (array.indexOf(item) == 2) {
      skills.buttonActiveBg.style.left = `calc((100% / 6)*4)`
    }

    item.classList.add("active")
    array.forEach((it) => {
      if (it != item) {
        it.classList.remove("active")
      }
    })

    //Show skills which is the same sort with active button
    skills.skillSorts.forEach((it, ind, arr) => {
      if (item.classList.contains(it)) {

        skills.skills.forEach((it1, in1, arr1) => {
          if (it1.classList.contains(it)) {
            it1.style.display = "block"
          } else {
            it1.style.display = "none"
          }
        })
      }
    })

  })
})



//----------------  Certificates -------------------

const certificatesContainer = document.querySelector("#about article.certificates ul")

const certNavLeft = document.querySelector("#about .certificates button.left")
const certNavRight = document.querySelector("#about .certificates button.right")

const certificate = document.querySelectorAll("#about .certificates ul li")[0]

certificatesContainer.addEventListener("wheel", (event) => {
  event.preventDefault();

  //Get the scroll direction and scroll by size of one element in our media scroller for responsive consistency
  certificatesContainer.scrollLeft += (Math.sign(event.deltaY) * parseInt(getComputedStyle(certificate).width))
})

certNavLeft.addEventListener("click", () => {
  certificatesContainer.scrollLeft += - parseInt(getComputedStyle(certificate).width)
})
certNavRight.addEventListener("click", () => {
  certificatesContainer.scrollLeft += parseInt(getComputedStyle(certificate).width)
})




