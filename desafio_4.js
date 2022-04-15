var numeroSecreto = parseInt(Math.random() * 11);
var tentativa = 0;

while( tentativa < 3){  
  var chute = prompt("Adivinhe o número secreto chutando um valor de 0 a 10");
  tentativa++; 
  if(numeroSecreto == `${chute}`){
    alert("Parabéns, você acertou!!!");
    acertou = true;
    break;
   }else{
    alert("Que pena, você errou...");
   }
  if(tentativa == 3){
    alert("Acabaram-se as chances. O número secreto era " + numeroSecreto + ".")
  }
}
alert("Fim de jogo!");
  