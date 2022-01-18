/* This is a simple static website language adaption system I created myself.
    It detects navigator's language and if it is "tr-TR" it converts to page to Turkish.
*/
if(navigator.language == "tr-TR"){
  ChangeLanguage("tr-TR")
}

function ChangeLanguage(language){
 
  document.documentElement.lang = language //Change document's lang attribute

  

}