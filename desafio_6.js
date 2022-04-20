var frutas = [];
var laticinios = [];
var congelados = [];
var doces = [];
var outros = [];

var adicionar = "sim";
var remover = "sim";

var adicionarItem = prompt("Deseja adicionar algum item à a sua lista de compras?");

while(adicionar == `${adicionarItem}`){

    var item = prompt("O que deseja adicionar?");
    var categoria = prompt(`${item}` + " se encaixa em que categoria: frutas, laticínios, congelados ou doces?");
    
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
    
    var removerItem = prompt("Deseja remover algum item da sua lista de compras?");

    if(remover == `${removerItem}`){
     
      var selecionaCategoria = prompt("Em que categoria está o produto? 1 = frutas, 2 = latícinios, 3 = congelados, 4 = doces, 5 = outros");
      
      if(selecionaCategoria === "1"){
        var excluirFrutas = prompt(`nessa categoria temos: ${frutas}. Que produto você deseja excluir?`);

        var indiceFrutas = frutas.indexOf(excluirFrutas);
        frutas.splice(indiceFrutas, 1);
        alert(`${excluirFrutas} foi removido com sucesso!`);
        alert(`frutas restantes: ${frutas}`);
        var adicionarItem = prompt("Deseja adicionar algum item à  sua lista de compras?");
      
      }else if(selecionaCategoria === "2"){
        var excluirLaticinios = prompt(`nessa categoria temos: ${laticinios}. Que produto você deseja excluir?`);

        var indiceLaticinios = laticinios.indexOf(excluirLaticinios);
        laticinios.splice(indiceLaticinios, 1);
        alert(`${excluirLaticinios} foi removido com sucesso!`);
        alert(`laticínios restantes: ${laticinios}`);
        var adicionarItem = prompt("Deseja adicionar algum item à  sua lista de compras?");

      }else if(selecionaCategoria === "3"){
        var excluirCongelados = prompt(`nessa categoria temos: ${congelados}. Que produtos você deseja excluir?`);

        var indiceCongelados = congelados.indexOf(excluirCongelados);
        congelados.splice(indiceCongelados, 1);
        alert(`${excluirCongelados} foi removido com sucesso!`);
        alert(`congelados restantes: ${congelados}`);
        var adicionarItem = prompt("Deseja adicionar algum item à  sua lista de compras?");
      
      }else if(selecionaCategoria === "4"){
        var excluirDoces = prompt(`nessa categoria temos: ${doces}. Que produtos você deseja excluir?`);

        var indiceDoces = doces.indexOf(excluirDoces);
        doces.splice(indiceDoces, 1);
        alert(`${excluirDoces} foi removido com sucesso!`);
        alert(`doces restantes: ${doces}`);
        var adicionarItem = prompt("Deseja adicionar algum item à  sua lista de compras?");

      }else if(selecionaCategoria === "5"){
        var excluirOutros = prompt(`nessa categoria temos: ${outros}. Que produtos você deseja excluir?`);

        var indiceOutros = outros.indexOf(excluirOutros);
        outros.splice(indiceOutros, 1);
        alert(`${excluirOutros} foi removido com sucesso!`);
        alert(`outros restantes: ${outros}`);
        var adicionarItem = prompt("Deseja adicionar algum item à  sua lista de compras?");

      }else{
        alert("categoria não existente");
        var adicionarItem = prompt("Deseja adicionar algum item à  sua lista de compras?");
      }
    
    }else{
      var adicionarItem = prompt("Deseja adicionar algum item à  sua lista de compras?");
    }
    
    var adicionarItem = prompt("Deseja adicionar algum item à  sua lista de compras?");
 
}

alert(`Sua lista de compras:
           Frutas: ${frutas};
           Laticínios: ${laticinios};
           Congelados: ${congelados};
           Doces: ${doces};
           Outros: ${outros};`)