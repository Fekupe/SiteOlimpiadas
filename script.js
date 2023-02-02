// let entrada = prompt("Digite o ano que você nasceu");
// alert(2023 - entrada);
// alert(typeof entrada);


let body = document.querySelector("body");
//let nav = document.querySelector("nav");


//function toDarkSideNav() {
  //nav.classList.add("dark-nav");
  //nav.classList.remove("light-nav");
//}

//function toJediSideNav() {
  //nav.classList.add("light-nav");
  //nav.classList.remove("dark-nav");
//}

function toDarkSide() {
  body.classList.add("dark");
  body.classList.remove("light");
}

function toJediSide() {
  body.classList.add("light");
  body.classList.remove("dark");
}

function toJediSide() {
  console.log("OK");

  body.classList.add("light");
  body.classList.remove("dark");
}

//function toJediSideNav() {
  //console.log("OK");
  //nav.classList.add("light-nav");
  //nav.classList.remove("dark-nav");
//}

// só um teste do toggle pra ver se funciona 
