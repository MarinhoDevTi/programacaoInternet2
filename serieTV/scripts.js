let nome = document.querySelector("header .info h1");
nome.innerHTML = bd.nome;

document.querySelector("header .info .generos").innerHTML = bd.generos;
document.querySelector("header .info p").innerHTML = bd.resumo;
document.querySelector("header .info .nota").innerHTML = bd.nota;

let poster = document.querySelector("header .poster img");
poster.setAttribute("src", bd.fotoPoster);

document.querySelector("header").style.backgroundImage = `url("${bd.fotoBg}")`;


//ELENCO

let elencoContainer = document.querySelector(".elenco-container");

elencoContainer.innerHTML = "";

for(let ator of bd.elenco){
    let html = ` 
        <div class="ator">
            <img src="${ator.foto}" />
            <span class="nome">${ator.nome}</span>
            <span class="personagem">${ator.personagem}</span>
        </div>
    `;

    elencoContainer.insertAdjacentHTML("beforeend", html);
}



