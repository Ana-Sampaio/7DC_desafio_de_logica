var area1 = 'Front-End';
var area2 = 'Back-End';

var linguagem1 = 'React';
var linguagem2 = 'Vue';
var linguagem3 = 'C#';
var linguagem4 = 'Java';

var modelo1 = "se especializar em uma área específica";
var modelo2 = "se tornar desenvolvedor Fullstack"

var pergunta1 = prompt("você gostaria de seguir no caminho do " + area1 + " (responda com 1) ou do " + area2 + " (responda com 2)?");

if(pergunta1 == 1){

    var frontEnd = prompt("muito bem, você gosta de " + area1 + ". Agora, você se interessa mais por " + linguagem1 + " (responda com 1) ou por " + linguagem2 + " (responda com 2) ?");
    if(frontEnd == 1){   
        var react = prompt("legal, você que quer aprender " + linguagem1 + " . Mas você preferiria " + modelo1 + " (responda com 1) ou de " + modelo2 + " (responda com 2).");
        if(react == 1){
            alert("então, você é um estudante de " + area1 + " que quer aprender " + linguagem1 + " e " + modelo1)
        }else if (react == 2){
            alert("então, você é um estudante de " + area1 + " que quer aprender " + linguagem1 + " e " + modelo2)
        }else{
            alert("resposta inválida")
        }

    }else if (frontEnd == 2){
        var vue = prompt("legal, você que quer aprender " + linguagem2 + " . Mas você preferiria " + modelo1 + " (responda com 1) ou de " + modelo2 + " (responda com 2).")
        if(vue == 1){
            alert("então, você é um estudante de " + area1 + " que quer aprender " + linguagem2 + " e " + modelo1)
        }else if (vue == 2){
            alert("então, você é um estudante de " + area1 + " que quer aprender " + linguagem2 + " e " + modelo2)
        }else{
            alert("resposta inválida")
        }
    }else{
        alert("resposta iválida")
    }

}else if(pergunta1 == 2){

    var backEnd = prompt("muito bem, você gosta de " + area2 + ". Agora, você se interessa mais por " + linguagem3 + " (responda com 1) ou por " + linguagem4 + " (responda com 2) ?");
    if(backEnd == 1){
        var C = prompt("legal, você que quer aprender " + linguagem3 + " . Mas você preferiria " + modelo1 + " (responda com 1) ou de " + modelo2 + " (responda com 2).");
        if(C == 1){
            alert("então, você é um estudante de " + area2 + " que quer aprender " + linguagem3 + " e " + modelo1)
        }else if (C == 2){
            alert("então, você é um estudante de " + area2 + " que quer aprender " + linguagem3 + " e " + modelo2)
        }else{
            alert("resposta inválida")
        }

    }else if(backEnd == 2){
        var java = prompt("legal, você que quer aprender " + linguagem4 + " . Mas você preferiria " + modelo1 + " (responda com 1) ou de " + modelo2 + " (responda com 2).")
        if (java == 1){
            alert("então, você é um estudante de " + area2 + " que quer aprender " + linguagem4 + " e " + modelo1)
        }else if(java == 2){
            alert("então, você é um estudante de " + area2 + " que quer aprender " + linguagem4 + " e " + modelo2)
        }else{
            alert("resposta inválida")
        }
    }else{
        alert("respostá inválida")
    }  
      
}else{
    alert("resposta inválida")
}

var pergunta2 = prompt("Você tem interesse em se aprofundar em alfuma outra área (responda com 1 para SIM e 2 com para NÃO) ");

while(pergunta2 == 1){
    var areas = prompt("é mesmo? Qual?");
    alert(`WOW!!! ${areas} é realmente muito interessante`);
    pergunta2 = prompt("Você tem interesse em se aprofundar em  outra área (responda com 1 para SIM e 2 com para NÃO)");
} 
alert("Que pena... mas bem, você já tem bastante trabalho")