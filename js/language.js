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

  GetLangPack(packAdress).then(function (pack) { ApplyLangPack(pack) })

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
  //console.log(Object.entries(pack)[0])
  for (let a in pack) {
    if (typeof pack[a] !== 'object') {
      window[`${document}.${a}`]
    } else {
      for (let b in pack[a]) {
        if (typeof pack[a][b] !== 'object') {
        } else {
          for (let c in pack[a][b]) {
            if (typeof pack[a][b][c] !== 'object') {
              console.log(`document.${a}.${b}.${c}.${pack[a][b][c]} big chungus`)
              eval(`document.${a}.${b}.${c}.${pack[a][b][c]}`)
            } else {
              for (let d in pack[a][b][c]) {
                if (typeof pack[a][b][c][d] !== 'object') {
                  console.log(`document.${a}.${b}.${c}.${d}.${pack[a][b][c][d]} big chungus`)
                  eval(`document.${a}.${b}.${c}.${d}.${pack[a][b][c][d]}`)
                } else {
                  for (let e in pack[a][b][c][d]) {
                    if (typeof pack[a][b][c][d][e] !== 'object') {
                      console.log(`document.${a}.${b}.${c}.${d}.${e}.${pack[a][b][c][d][e]} big chungus`)
                      eval(`document.${a}.${b}.${c}.${d}.${e}.${pack[a][b][c][d][e]}`)
                    } else {

                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}