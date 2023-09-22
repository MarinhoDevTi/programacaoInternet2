// Endpoint - > o acesso inicial da API
let busca = "csi";
let url = "https://api.tvmaze.com/search/shows?q=" + busca;

let divSeries = document.querySelector("#series");

// Faz requisição 
console.log("Fazendo a requisição ...");
fetch(url)
    .then(resposta => resposta.json()) //é do fetch
    .then(series => exibeSeries(series)) //é do json()
    .catch(erro => console.error(erro))

  

function exibeSeries(series){
    for (let serie of series){
        let html =
            <div class = "card">
                <h1>${serie.show.name}</h1>
                <h3>
                    ${serie.show.genres.join("|")}
                </h3>
                <div class= "colunas">
                    <div class = "poster">
                        <img src="${serie.show.image.medium}" />
                    </div>
                    <p>${serie.show.summary}</p>
                </div>
           </div> 
        ;
        divSeries.insertAdjacentHTML("beforeend", html)  
    }

}