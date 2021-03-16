let Jogador1 
let Jogador2 
let game ={
    iniciado: false,
    turno:null,
    jogadas:[[,,],[,,],[,,]],
    placar:{
        jogador1:0,
        jogador2:0,
        empates:0
    },
    numJogadas:0,
    nivel:1,
    multiplayer:false
}

const celula = document.querySelectorAll('.celula')



celula.forEach(function( element, index ) {
  

        element.onclick = function( event ) {
            event.preventDefault();
           if(game.iniciado){   
                if(verificarPosicao(this.id)){
                        if(game.turno==Jogador1.vez){
                            marcar(1,parseInt(this.id))
                            this.style.backgroundColor = "chartreuse"
                            this.innerHTML = Jogador1.simbolo
                            document.getElementById('vezMenu2').innerHTML = 'Sua vez!'
                            document.getElementById('vezMenu2div').style.backgroundColor = 'rgba(6, 236, 64, 0.712)' ;
                            document.getElementById('vezMenu2div').style.boxShadow = '0 4px 8px 0 rgba(6, 236, 64, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
                            document.getElementById('vezMenu1').innerHTML = 'Aguarde!'
                            document.getElementById('vezMenu1div').style.backgroundColor = 'rgba(247, 0, 0, 0.712)'
                            document.getElementById('vezMenu1div').style.boxShadow ='0 4px 8px 0 rgba(247, 0, 0, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

                        }
                        else{
                            marcar(2,parseInt(this.id))
                            this.style.backgroundColor = 'yellow' 
                            this.innerHTML = Jogador2.simbolo
                            document.getElementById('vezMenu1').innerHTML = 'Sua vez!'
                            document.getElementById('vezMenu1div').style.backgroundColor = 'rgba(6, 236, 64, 0.712)' ;
                            document.getElementById('vezMenu1div').style.boxShadow = '0 4px 8px 0 rgba(6, 236, 64, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
                            document.getElementById('vezMenu2').innerHTML = 'Aguarde!'
                            document.getElementById('vezMenu2div').style.backgroundColor = 'rgba(247, 0, 0, 0.712)'
                            document.getElementById('vezMenu2div').style.boxShadow ='0 4px 8px 0 rgba(247, 0, 0, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

                            }


                            if (game.turno == 1){
                                game.turno = 2
                            }else{
                                game.turno = 1
                            }
                            if (Jogador1.verificar()){
                                $('#painelVitoria').modal('show')
                                document.getElementById('vitorianick').innerHTML = Jogador1.nick + ' Venceu!'
                            game.placar.jogador1++
                            document.getElementById('placarMenu1').innerHTML = game.placar.jogador1
                            }
                            if (Jogador2.verificar()){
                                $('#painelVitoria').modal('show')
                                document.getElementById('vitorianick').innerHTML = Jogador2.nick + ' Venceu!'
                                game.placar.jogador2++
                                document.getElementById('placarMenu2').innerHTML = game.placar.jogador2
                            }
                            game.numJogadas++
                            if(game.numJogadas == 9){
                                $('#painelVitoria').modal('show')
                                document.getElementById('vitorianick').innerHTML = 'Deu Velha #'
                                game.placar.empates++
                                document.getElementById('submenuVelhas').innerHTML = '# Velhas: '+game.placar.empates
                                // document.getElementById('submenuVelhasdiv').style.backgroundColor = 'rgba(247, 0, 0, 0.712)'
                                document.getElementById('submenuVelhas').style.boxShadow ='0 2px 4px 0 rgba(187, 192, 192, 0.712), 0 3px 10px 0 rgba(0, 0, 0, 0.19)'
                            }    
                    }else{alert('Posiçao já selecionada.')}
            }else{alert('Jogo ainda não começou.')}
    }
})

function marcar(player, posicao){ 
    console.log('player:', player, 'posicao',posicao);
    
    if(player == 1){
            switch (posicao) {
                        case 1:
                                                        
                            Jogador1.setJogada(0,0)
                             game.jogadas[0][0] = Jogador1.nick
                            break;
                        case 2:
                            Jogador1.setJogada(0,1)
                             game.jogadas[0][1]= Jogador1.nick
                            break;
                        case 3:
                            Jogador1.setJogada(0,2)
                             game.jogadas[0][2]= Jogador1.nick
                            break;
                        case 4:
                            Jogador1.setJogada(1,0)
                             game.jogadas[1][0]= Jogador1.nick
                            break;
                        case 5:
                            Jogador1.setJogada(1,1)
                             game.jogadas[1][1]= Jogador1.nick
                            break;
                        case 6:
                            Jogador1.setJogada(1,2)
                             game.jogadas[1][2]= Jogador1.nick
                            break;
                        case 7:
                            Jogador1.setJogada(2,0)
                             game.jogadas[2][0]= Jogador1.nick
                            break;
                        case 8:
                            Jogador1.setJogada(2,1)
                             game.jogadas[2][1]= Jogador1.nick
                            break;
                        case 9:
                            Jogador1.setJogada(2,2)
                             game.jogadas[2][2]= Jogador1.nick
                            break;
                        default:
                            break;
                    }
        }else{
            switch (posicao) {
                        case 1:
                        Jogador2.setJogada(0,0)
                             game.jogadas[0][0] = Jogador2.nick
                            break;
                        case 2:
                            Jogador2.setJogada(0,1)
                             game.jogadas[0][1]= Jogador2.nick
                            break;
                        case 3:
                            Jogador2.setJogada(0,2)
                             game.jogadas[0][2]= Jogador2.nick
                            break;
                        case 4:
                            Jogador2.setJogada(1,0)
                             game.jogadas[1][0]= Jogador2.nick
                            break;
                        case 5:
                            Jogador2.setJogada(1,1)
                             game.jogadas[1][1]= Jogador2.nick
                            break;
                        case 6:
                            Jogador2.setJogada(1,2)
                             game.jogadas[1][2]= Jogador2.nick
                            break;
                        case 7:
                            Jogador2.setJogada(2,0)
                             game.jogadas[2][0]= Jogador2.nick
                            break;
                        case 8:
                            Jogador2.setJogada(2,1)
                             game.jogadas[2][1]= Jogador2.nick
                            break;
                        case 9:
                            Jogador2.setJogada(2,2)
                             game.jogadas[2][2]= Jogador2.nick
                            
                        default:
                            break;
                    }
            }


}

function verificarPosicao(posicao){
    posicao=parseInt(posicao)
    switch (posicao) {
        case 1:
                                        
            if(game.jogadas[0][0]==null)
            {return true
            }else{
            return false}
              
            break;
        case 2:
          
             if(game.jogadas[0][1]==null)
            {return true
            }else{
            return false}
              
            break;
        case 3:
             if(game.jogadas[0][2]==null)
            {return true
            }else{
            return false}
            break;
        case 4:
             if(game.jogadas[1][0]==null)
            {return true
            }else{
            return false}
              
            break;
        case 5:
             if(game.jogadas[1][1]==null)
            {return true
            }else{
            return false}
              
            break;
        case 6:
             if(game.jogadas[1][2]==null)
            {return true
            }else{
            return false}
              
            break;
        case 7:
             if(game.jogadas[2][0]==null)
            {return true
            }else{
            return false}
              
            break;
        case 8:
             if(game.jogadas[2][1]==null)
            {return true
            }else{
            return false}
              
            break;
        case 9:
             if(game.jogadas[2][2]==null)
            {return true
            }else{
            return false}
              
            break;
        default:
            break;
    }
}

function criarJogador1(){
    let nic = document.getElementById('nick1').value
    let simbol = document.getElementById('simbolo1').value
   if (Jogador1 == undefined){
    Jogador1= new Jogador(nic,0,simbol)
     
   }else{
       alert('Jogador1 ja informado!!!')
   }
}
function criarJogador2(){
    let nic = document.getElementById('nick2').value
    let simbol = document.getElementById('simbolo2').value
    if (Jogador2 == undefined){
        Jogador2= new Jogador(nic,0,simbol)
    }else{
        alert('Jogador2 ja informado!!!')
    }

}

function salvar(){
    criarJogador1()
    criarJogador2()
}

function sortearVez(){
    let variavel  = Math.random()
     variavel = Math.round(variavel)
    if (Jogador1 != undefined && Jogador2 != undefined ){
        if (variavel % 2 == 0){

                Jogador1.vez = 1
                Jogador2.vez = 2
            }else{
                Jogador1.vez = 2
                Jogador2.vez = 1
            }
    }else{
        alert('Todos jogadores devem ser informados!')
    }

}

function iniciar(){
    if (game.iniciado){
        zerarTabuleiro()
    }else{
        sortearVez()
        document.getElementById('nickMenu1').innerHTML = Jogador1.nick
        document.getElementById('simboloMenu1').innerHTML = Jogador1.simbolo
        if (Jogador1.vez ==1){
            document.getElementById('vezMenu1').innerHTML = 'Sua vez!'
            document.getElementById('vezMenu1div').style.backgroundColor = 'rgba(6, 236, 64, 0.712)' ;
            document.getElementById('vezMenu1div').style.boxShadow = '0 4px 8px 0 rgba(6, 236, 64, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
            document.getElementById('vezMenu2').innerHTML = 'Aguarde!'
            document.getElementById('vezMenu2div').style.backgroundColor = 'rgba(247, 0, 0, 0.712)'
            document.getElementById('vezMenu2div').style.boxShadow ='0 4px 8px 0 rgba(247, 0, 0, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

            game.turno = 1
        }
            document.getElementById('nickMenu2').innerHTML = Jogador2.nick
        document.getElementById('simboloMenu2').innerHTML = Jogador2.simbolo
        if (Jogador2.vez ==1){
            document.getElementById('vezMenu2').innerHTML = 'Sua vez!'
            document.getElementById('vezMenu2div').style.backgroundColor = 'rgba(6, 236, 64, 0.712)' ;
            document.getElementById('vezMenu2div').style.boxShadow = '0 4px 8px 0 rgba(6, 236, 64, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
            document.getElementById('vezMenu1').innerHTML = 'Aguarde!'
            document.getElementById('vezMenu1div').style.backgroundColor = 'rgba(247, 0, 0, 0.712)'
            document.getElementById('vezMenu1div').style.boxShadow ='0 4px 8px 0 rgba(247, 0, 0, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

            game.turno = 1
        }
        game.iniciado = true
        game.numJogadas = 0
        game.placar.empates = 0
        document.getElementById('placarMenu2').innerHTML = 0
        document.getElementById('placarMenu1').innerHTML = 0
    }
}

function zerarTabuleiro(){
    document.querySelectorAll('.celula')
    var x, i;
    x = document.querySelectorAll(".celula");
    for (i = 0; i < x.length; i++) {
      x[i].innerHTML = ''
      x[i].style.backgroundColor = '#FFFAFA'
    }
    Jogador1.jogadas = [[ , , ],[ , , ],[ , , ]]
    Jogador2.jogadas = [[ , , ],[ , , ],[ , , ]]
     game.jogadas    = [[ , , ],[ , , ],[ , , ]]
     game.numJogadas = 0

}

function reiniciar(){
    location.reload();
}
$('#exemplo').tooltip(options)
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

function jogadaComputador(){
    if(game.nivel == 1){
        nivel1()
    }
    if(game.nivel == 2){
        nivel2()
    }
}  

function nivel1(){

var posicoes = ()=>{
    let num=[]
    for (let index = 1; index < 9; index++) {
        if(verificarPosicao(index)){
            num.push(index)
        }
        
    }
    return num
}
var randomItem = posicoes[Math.floor(Math.random()*posicoes.length)];
if(game.turno==Jogador2.vez){   
    marcar(2,randomItem)
            this.style.backgroundColor = 'yellow' 
            this.innerHTML = Jogador2.simbolo
            document.getElementById('vezMenu1').innerHTML = 'Sua vez!'
            document.getElementById('vezMenu1div').style.backgroundColor = 'rgba(6, 236, 64, 0.712)' ;
            document.getElementById('vezMenu1div').style.boxShadow = '0 4px 8px 0 rgba(6, 236, 64, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
            document.getElementById('vezMenu2').innerHTML = 'Aguarde!'
            document.getElementById('vezMenu2div').style.backgroundColor = 'rgba(247, 0, 0, 0.712)'
            document.getElementById('vezMenu2div').style.boxShadow ='0 4px 8px 0 rgba(247, 0, 0, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

            }


            if (game.turno == 1){
                game.turno = 2
            }else{
                game.turno = 1
            }
   
            if (Jogador2.verificar()){
                $('#painelVitoria').modal('show')
                document.getElementById('vitorianick').innerHTML = Jogador2.nick + ' Venceu!'
                game.placar.jogador2++
                document.getElementById('placarMenu2').innerHTML = game.placar.jogador2
            }
            game.numJogadas++
            if(game.numJogadas == 9){
                $('#painelVitoria').modal('show')
                document.getElementById('vitorianick').innerHTML = 'Deu Velha #'
                game.placar.empates++
                document.getElementById('submenuVelhas').innerHTML = '# Velhas: '+game.placar.empates
                // document.getElementById('submenuVelhasdiv').style.backgroundColor = 'rgba(247, 0, 0, 0.712)'
                document.getElementById('submenuVelhas').style.boxShadow ='0 2px 4px 0 rgba(187, 192, 192, 0.712), 0 3px 10px 0 rgba(0, 0, 0, 0.19)'
            }    
     
}