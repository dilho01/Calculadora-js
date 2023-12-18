 function caregar(valor){
    document.querySelector("#conteudo").innerHTML += valor;
 }
 function deletar(){
   document.querySelector("#conteudo").innerHTML = "";
 }
 function deletar2(){
   let conteudo = document.querySelector("#conteudo").innerHTML;
   document.querySelector("#conteudo").innerHTML = conteudo.substring(0, conteudo.length - 1);
 }
  function somar(){
   let conteudo = document.querySelector("#conteudo").innerHTML;
   if(conteudo){
      document.querySelector("#conteudo").innerHTML = eval(conteudo);
   }else{
      document.querySelector("#conteudo").innerHTML = "nada";
   }
  }