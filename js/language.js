/* This is a simple static website language adaption system I created myself.
    It detects navigator's language and if it is "tr-TR" it converts to page to Turkish.
*/


//Hide or show language select menu on header nav
const langMenuSwitch = document.getElementById("lang-switch")
const langMenu = langMenuSwitch.querySelector(".dropdown")

const trSwitch = langMenu.querySelector(".tr")
const enSwitch = langMenu.querySelector(".en")
const langSwitches = [trSwitch, enSwitch]

//Open dropdown menu of lang switches
langMenuSwitch.addEventListener("click", () => {
  let situation = getComputedStyle(langMenu).display
  if (situation == "none") {
    langMenu.style.display = "flex"
  } else {
    langMenu.style.display = "none"
  }
})

langSwitches.forEach(element => {
  element.addEventListener("click", () => {


    IndicateLanguage(element)
    if(element.name == "tr") ChangeLanguage("tr-TR");
    if(element.name == "en") location.reload()
    localStorage.forceLang = true
    localStorage.lang = element.name

    /*  let d = new Date()
    d.setDate(d.getDate() + 365)
    document.cookie = `forceSwitch=true; expires=${d}; path=/`
    document.cookie = `lang=${element.name}; expires=${d}; path=/` */
  })
});

/* if (!forceLang) {
  if (navigator.language == "tr-TR") {
    ChangeLanguage("tr-TR")
  }
} */


//If language have been manually changed before, remember that change 
if(localStorage.forceLang == "true"){
  if(localStorage.lang == "tr"){
    ChangeLanguage("tr-TR")
  }
} 
if(localStorage.length == 0){
  IndicateLanguage("en")
}

//Function for visibility of active language in langMenu
function IndicateLanguage(input) {

  let element;
  if (typeof input == "object") {     //Input can be element itself
    element = input
  }
  if (typeof input == "string") {       //Input can be language too
    element = langMenu.querySelector(`[name="${input.substring(0, 2)}"]`)    //Lang switch names do not contain country code
  }
  element.classList.add("active")
  langSwitches.forEach(elem => {
    if (elem != element) {
      elem.classList.remove("active")
    }
  })
}
IndicateLanguage(document.documentElement.lang)     //Indicate the language when window load

//Observing language changes
const LangObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "attributes") {
      console.log("attributes changed")
      console.log(`document lang is ${mutation.target.lang}`)

      IndicateLanguage(mutation.target.lang)
    }
  })
})
LangObserver.observe(document.documentElement, {
  attributes: true,
})




var langPack;
var previousPack;
function ChangeLanguage(language) {
  document.documentElement.lang = language //Change document's lang attribute
  var packAdress
  if (language == "tr-TR") {
    packAdress = "../language-packs/TR-index.json"
  }

  GetLangPack(packAdress)
    .then(function (pack) { ApplyLangPack(pack) })

}

async function GetLangPack(address) {
  let data =
    await fetch(address)
      .then(response => response.json())
      .then(text => {
        return text;
      });
  //console.log(data)
  return (data)
}

function ApplyLangPack(pack) {

  for (let a in pack) {
    if (pack[a][0] == "innerHTML") {
      document.querySelector(a).innerHTML = pack[a][1]
    }
  }
}


