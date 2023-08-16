function CriarArrayComMensagens( separar , todas_frases ){
  array = todas_frases.split(separar);
  
  console.log(array);
  
  return array;  
}

function EncontrarIndexAleatório( array){

  let max_index = (array.length -1);
  let index_aleatorio = Math.round(Math.random() * max_index);

  console.log(index_aleatorio)
  
  return index_aleatorio;

}

let array=[];
array= CriarArrayComMensagens("*", "testando*para*ver*se*este*modelo*de*criar*array*realmente*funciona")
console.log(array);
new_index = EncontrarIndexAleatório(array)
console.log(array[new_index]);

new_index = EncontrarIndexAleatório(array)
console.log(array[new_index]);

console.log("Asignment per variavle parameters")


let ARRAY = [], SEPARE = "*" , MENSAGEM = "testando*para*ver*se*este*modelo*de*criar*array*realmente*funciona";
ARRAY = CriarArrayComMensagens(SEPARE, MENSAGEM)
console.log(ARRAY);
new_index = EncontrarIndexAleatório(ARRAY)
console.log(ARRAY[new_index]);




