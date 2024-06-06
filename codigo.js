function acordajoe() {
    let resposta; // criando 
    //a variavel resposta
    resposta=prompt("Joe, lets play...");
    if (resposta=="y") {
       alert("beleza vamos jogar");
       jogar();
       // jogo
     } else {
        alert("mensagem do coracao");
     } ;
}




function jogar(){
// CRIAR O ARRAY QUE REPRESENTA
    // O BARALHO
 //====== BLOCO DE VARIAVEIS======================
 //======================================================
 let n1 =["A♠","2♠","3♠","4♠","5♠","6♠","7♠","8♠","9♠","10♠","J♠","Q♠","K♠"];
 let n2 =["A♣","2♣","3♣","4♣","5♣","6♣","7♣","8♣","9♣","10♣","J♣","Q♣","K♣"];
 let n3 =["A♥","2♥","3♥","4♥","5♥","6♥","7♥","8♥","9♥","10♥","J♥","Q♥","K♥"];
 let n4 =["A♦","2♦","3♦","4♦","5♦","6♦","7♦","8♦","9♦","10♦","J♦","Q♦","K♦"];
 let baralho= n1.concat(n2,n3,n4);
   baralho.sort(randOrd); 
   baralho.forEach(element => {   // laço for each para cada elemento dentro do baralho ele faz os comandos
        baralho.sort(randOrd);
    });
    alert("embaralhando");
    alert("ordem atual do : "+ baralho);
    let cj =[];
    let cr =[];
    cj.push(baralho.shift());
    cr.push(baralho.shift());
    alert("você está com "+cj);
    alert("o Robot tirou um "+cr);
    let ordem=["A","2","3","4","5","6","7",
        "8","9","10","K","J","Q"];
    let valorcj= cj[0].slice(0,1);
    let valorcr= cr[0].slice(0,1);
    alert(valorcj);
    alert(valorcr);
    let pontosj= ordem.indexOf(valorcj);
    let pontosr= ordem.indexOf(valorcr);
    alert(pontosj);
    alert(pontosr);
    if (pontosj>=pontosr){
        alert("o jogador ganhou");
    }else{
        alert("o robot ganhou kkkk");
    }


}
    
 

function randOrd(a, b) {
    return Math.random() - 0.5; // Gera um número aleatório entre -0.5 e 0.5
   }
   
