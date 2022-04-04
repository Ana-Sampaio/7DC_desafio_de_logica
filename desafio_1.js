// Nos três desafios, só se conseguirá uma resposta diferente alterando diretamente as variáveis

let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

//DESAFIO do 1

if (numeroUm == stringUm) {
    console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

// DESAFIO dos 30

/*solução 1*/

if (numeroTrinta === stringTrinta){
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo valor')
}

/* solução 2*/

/*if (numeroTrinta == stringTrinta) {
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor, mas tipos diferentes')
} else if (numeroTrinta === stringTrinta) { 
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
}else {
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo valor')
}*/

/*solução 3*/

/*if (numeroTrinta == stringTrinta) {
    if(numeroTrinta === stringTrinta){
        console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
    }else{
        console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor, mas tipos diferentes')
    }
}else{
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo valor')
}
*/

/*solução 4*/

/*numeroTrinta = 30;
stringTrinta = 30;

if (numeroTrinta === stringTrinta){
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo valor')
}*/

/*solução 5*/

/*numeroTrinta = '30';
stringTrinta = '30';

if (numeroTrinta === stringTrinta){
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo valor')
}*/

/*solução 6*/

/*if (numeroTrinta == stringTrinta && numeroTrinta === stringTrinta){
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo valor')
}*/

//DESAFIO DO 10

if (numeroDez == stringDez) {
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
  } else {
    console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}

