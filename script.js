function alerta(){
    var numero = parseInt(document.getElementById('num').value)
    var mensagem = document.getElementById('msg')     
    var tabuada='';
  for(var count=1; count<=10 ; count++)
   tabuada += numero+" x "+count+" = "+
               numero*count+"<br />"; 
  mensagem.innerHTML = 'Tabuada do '+numero +'<br>'+tabuada;
}
//teste git