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

  for(let a in pack){
    if(pack[a][0] == "innerHTML"){
      document.querySelector(a).innerHTML = pack[a][1]
    }
  }
}