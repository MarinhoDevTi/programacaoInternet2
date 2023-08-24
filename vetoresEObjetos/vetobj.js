let frutas = ["Abacaxi", "Abacate", "limão"];
console.log(frutas);


let primeiro = frutas[0];
console.log("Primeiro", primeiro);
let segundo = frutas[1];
console.log("Segundo", segundo);

let ultimo = frutas[2];
console.log(ultimo);

let tam = frutas.length // tamanho da lista 
console.log("Tamanho", tam);

frutas[1] = "Bergamota";
console.log(frutas)

frutas[5] = "jaca";
console.log( frutas );

tam = frutas.length;
frutas[tam] = "morango"
console.log(frutas);


// Adiciona o elemento no final da fila
frutas.push("Laranja", "Kiwi")
console.log( frutas);

// remove o elemento do final da lista ( e o retorna)
frutas.pop();
console.log(frutas);

  // -----


  for(let i = 0; i < frutas.length; i++) {
    console.log(i, frutas[i]);

  }
  console.log("------------------- for of")
  // for of iteração por elemento 
  for (let fruta of frutas) {
    console.log( fruta );
  }




  //objetos
  console.log("################# Objetos");

  let carro = {
    marca: "Fiat",
    modelo: "Uno",
    cor: "Branco",
    ano: 2005,
    flex: false
  }

  console.log(carro ["modelo"]);
  console.log( carro );

  carro["portas"] = 4;
  console.log( carro );

  let info = "ano";
  console.log( carro.)

  let curso = {
    nome: "ADS",
    periodos: [
        {
            nome: "1 Periodo".replace,
            lab: "B03",
            representante: "Alan",
            {
                professor: "Marcelo",
                nome: "Sistemas Digitais"
            }

        }
    ]
  }






