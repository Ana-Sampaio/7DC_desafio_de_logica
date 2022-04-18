var frutas = [];
var laticinios = [];
var congelados = [];
var doces = [];
var outros = [];

var adicionar = "sim";
var listaFinal = "não";

var adicionarItem = prompt("Deseja adicionar algum item à a sua lista de compras?");

while(adicionar == `${adicionarItem}`){

    var item = prompt("O que deseja adicionar?");
    var categoria = prompt(`${item}` + " se encaixa em que categoria: frutas, laticínios, congelados ou doces?");
    var adicionarItem = prompt("Deseja adicionar algum item à a sua lista de compras?");

    if(categoria === "frutas"){
      frutas.push(item);
    }else if(categoria === "laticínios"){
      laticinios.push(item);
    }else if(categoria === "congelados"){
      congelados.push(item);
    }else if(categoria === "doces"){
      doces.push(item);
    }else{
       outros.push(item);
    }
}

alert(`Sua lista de compras:
           Frutas: ${frutas};
           Laticínios: ${laticinios};
           Congelados: ${congelados};
           Doces: ${doces};
           Outros: ${outros}`);
      