// function soAceitaPares(numero) {
//     if (numero % 2 == 0){
//         console.log("É par");
//     }else {
//         console.log("É ímpar");
//     }
// }

function soAceitaPares(numero){
    return new Promise(function (resolve, reject) {
        if (numero % 2 == 0){
            resolve("É par");
        }else {
            reject("Não é par");
        }
    });
}
console.log("Antes de testar");
soAceitaPares(10).then(resposta => console.log(resposta)).catch(resposta => console.warn(resposta)); 

console.log("Depois de testar"); 


let btn = document.querySelector("#btn");


/*//função normal
btn.addEventListener("click", clicarBotao);


function clicarBotao(event){
   // let alvo = event.target;
   // let  title = alvo.getAttribute("tible");
   // console.log(title);

   console.log(event.target.getAttribute("title"));

}
*/

// Arrow Function
btn.addEventListener("click",(event) => console.log(event.target.getAttribute("title")))