const sec1 = document.querySelector(".sec1");
const img1 =document.querySelector("#img1");
const sec2 = document.querySelector(".sec2");
const b = document.querySelector("#b2");
let  menssage = document.querySelector(".menssage p")

let arrayy = [];
const separarr = "*";
const todas_frasess = `A vida trará coisas boas se tiveres paciência🥱.*Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro*Não compense na ira o que lhe falta na razão.*Defeitos e virtudes são apenas dois lados da mesma moeda.*A maior de todas as torres começa no solo.*Não há que ser forte. Há que ser flexivel.*Gente todo dia arruma os cabelos, por que não o coração?*Há três coisas que jamais voltam, a flecha lançada💘, a palavra dita e a oportunidade perdida.*A juventude não é uma época da vida, è um estado de espirito.*Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.*Dé toda a atenção para a formação dos teus filhos👨‍👩‍👧‍👦, sobretudo por exemplos de tua própria vida.*Siga os bons e aprenda com eles.*Não importa o tamanho da montanha, ela não pode tapar o sol.*O bom-senso vai mais longe do que muito conhecimento.*Quem quer colher rosas deve suportar os espinhos🪸.*São os nossos amigos que nos ensinam as mais valiosas lições.*Uma iniciativa mal-sucedida não significa o final de tudo.*Sempre Aquele que se importa com o sentimento dos outros, não é um tolo.*A adversidade é um espelho que reflete o verdadeiro eu.*Lamentar aquilo que não temos é desperdiçar aquilo que já possuimos.*Uma bela flor🥀 é incompleta sem suas folhas.*Sem o fogo🔥 do entusiasmo, não há o calor da vitória.*Não há melhor negócio que a vida. A gente há obtém a troco de nada.*O riso è a menor 🧑🏾‍🦱distância entre duas pessoas👩🏾‍🦱.*Você jovem apenas uma vez. Depois precisa inventar outra desculpa.*É mais fácil conseguir o perdão do que a permissão👵🏾.*Os defeitos são mais fortes quando o amor é fraco.*Amizade e Amor são coisas que podem virar uma so num piscar.*Surpreender e ser surpreendido é o segredo do amor😍.*Faça pequenas coisas agora e maiores coisas lhe serão confiadas cada dia.`;



img1.addEventListener("click", abrir );
b.addEventListener("click", fechar );



function CriarArrayComMensagens( arraY,separar , todas_frases ){

  arraY = todas_frases.split(separar);

  console.log("Entrou dentro da função que cria arrayY e separa as frases---------\n\n")

  for(let i of arraY){
    console.log( "index ["+ arrayy.indexOf(i) +"] ---->" + i + "\n");
  }

  return arraY;  
}

function EncontrarIndexAleatório( array){

  let max_index = (array.length -1);
  let index_aleatorio = Math.round(Math.random() * max_index);

  console.log( "entrou dentro da função gerar index aleatorio \n" + index_aleatorio + " " + array[index_aleatorio])
  
  return index_aleatorio;

}

function abrir(e){
  
  console.log(e)
  sec1.classList.add('d')
  sec2.classList.remove('d')

  arrayy = CriarArrayComMensagens(arrayy,separarr,todas_frasess)

  console.log("entrou na funcao abRir  COM ARRAY JA CRIADA \n");

  let index_random = EncontrarIndexAleatório(arrayy);

  console.log( "Gerado index aleatório dentro do abrir\n" + index_random + " com a frase " + arrayy[index_random]);

  let text = arrayy[index_random];
  menssage.innerText = text;
}

function fechar(e){

  console.log(e)
  sec2.classList.add('d')
  sec1.classList.remove('d');

}

function Animation1(e){
  //img shaking
  //delay 
  // swap to other screen

}

function Animation2(){
  //img scale and translatey 

}