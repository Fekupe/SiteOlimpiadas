// let entrada = prompt("Digite o ano que você nasceu");
// alert(2023 - entrada);
// alert(typeof entrada);

//let body = document.querySelector("body"); aqui éo incio
//function toDarkSide() {
  //body.classList.add("dark");
  //body.classList.remove("light");
//}

//function toJediSide() {
  //body.classList.add("light");
  //body.classList.remove("dark");
//}

//function toJediSide() {
  //console.log("OK");

  //body.classList.add("light");
  //body.classList.remove("dark");
//} aqui é o final 
//asdsa
// só um teste do toggle pra ver se funciona 
 
const btn = document.getElementById("switch");
  
btn.addEventListener("change", (e) => {
  document.body.classList.toggle("dark", e.target.checked);
})
