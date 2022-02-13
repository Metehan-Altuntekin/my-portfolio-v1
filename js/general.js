function RandomPos() {
  let a = Math.floor(Math.random() * 100 + 1)
  let b = `${a}%`
  return (b)
}

/* function UnitRemover(val){
  if(val.includes("px") || val.includes("vh") || val.includes("vw") || val.includes("pc") || val.includes("pt") || val.includes("cm") || val.includes("mm") || val.includes("em") ||  val.includes("ex") || val.includes("ch") || val.includes("lh")){
    toString(val.)
  }
} */


//Function to get cookies of page
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}