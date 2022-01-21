/* This is a simple static website language adaption system I created myself.
    It detects navigator's language and if it is "tr-TR" it converts to page to Turkish.
*/
if (navigator.language == "tr-TR") {
  ChangeLanguage("tr-TR")
}

var langPack;
var previousPack;
function ChangeLanguage(language) {
  document.documentElement.lang = language //Change document's lang attribute
  var packAdress
  if (language == "tr-TR") {
    packAdress = "../language-packs/TR-index-body.html"
  }

  GetLangPack(packAdress)
    .then(function (pack) { ApplyLangPack(pack) })
    .then(function () {
      //Need to create animations again
      CreateBg(document.getElementById("hero"))
      CreateBg(document.getElementById("portfolio"))
      CreateBg(document.getElementById("services"), "white")
      CreateBg(document.getElementById("about"))
      CreateBg(document.getElementById("contact"), "white")
    })

}

async function GetLangPack(address) {
  let data =
    await fetch(address)
      .then(response => response.text())
      .then(text => {
        return text;
      });
  return (data)
}

function ApplyLangPack(pack) {
  previousPack = document.body
  document.body.innerHTML = ""
  document.body.innerHTML += pack
}