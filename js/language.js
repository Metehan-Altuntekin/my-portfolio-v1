/* This is a simple static website language adaption system I created myself.
    It detects navigator's language and if it is "tr-TR" it converts to page to Turkish.
*/
if (navigator.language == "tr-TR") {
  ChangeLanguage("tr-TR")
}

var langPack;
function ChangeLanguage(language) {
  document.documentElement.lang = language //Change document's lang attribute
  var packAdress
  if (language == "tr-TR") {
    packAdress = "../language-packs/TR.JSON"
  }

  GetLangPack(packAdress).then(function (value) { ApplyLangPack(value) })

}

async function GetLangPack(address) {
  let data = await fetch(address)
    .then(response => response.json())
    .then(jsonObject => {
      return jsonObject;
    });
  return (data)
}

function ApplyLangPack(pack) {
  console.log(pack)
  console.log(pack.html.body.main.hero)

}