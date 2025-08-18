document.addEventListener('DOMContentLoaded', funtion()){
   
    
    let tamanhoAtualFonte = 1;
    aumentarFonteBotao.addEvent('click', function(){
        tamanhoAtual+= 0.1;
        document.body.style.fontSize = '${tamanhoAtualFonte}rem`'

    })
}//falta parentese?