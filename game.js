let Jogador1
let Jogador2
let corJ1, corJ2
let game = {
    iniciado: false,
    finalizado: false,
    iniciante: null,
    turno: null,
    jogadas: [[, ,], [, ,], [, ,]],
    placar: {
        jogador1: 0,
        jogador2: 0,
        empates: 0
    },
    numJogadas: 0,
    nivel: 0,
    multiplayer: false
}

const celula = document.querySelectorAll('.celula')

function escolhaCor(corescolhida,bt){
    if (bt=='btcorJ1'){
        if (corJ2 != corescolhida){
            corJ1 = corescolhida
            document.getElementById(bt).style.backgroundColor = corescolhida
        }else{
            alert("Essa cor já foi escolhida. ")
        }
    }
    if (bt=='btcorJ2'){
        if (corJ1 != corescolhida){
            corJ2 = corescolhida
            document.getElementById(bt).style.backgroundColor = corescolhida
        }else{
            alert("Essa cor já foi escolhida. ")
        }
    }
    
}



celula.forEach(function (element, index) {


    element.onclick = function (event) {
        event.preventDefault();
        if (game.iniciado) {
            if (verificarPosicao(this.id)) {
                if (game.turno == Jogador1.vez) {
                    marcar(1, parseInt(this.id))
                    this.style.backgroundColor = Jogador1.cor
                    this.innerHTML = Jogador1.simbolo
                    document.getElementById('vezMenu2').innerHTML = 'Sua vez!'
                    document.getElementById('vezMenu2div').style.backgroundColor = 'rgba(6, 236, 64, 0.712)';
                    document.getElementById('vezMenu2div').style.boxShadow = '0 4px 8px 0 rgba(6, 236, 64, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
                    document.getElementById('vezMenu1').innerHTML = 'Aguarde!'
                    document.getElementById('vezMenu1div').style.backgroundColor = 'rgba(247, 0, 0, 0.712)'
                    document.getElementById('vezMenu1div').style.boxShadow = '0 4px 8px 0 rgba(247, 0, 0, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                    finaliza()
                    if (!game.multiplayer && !game.finalizado) {

                        jogadaComputador()
                    }
                }
                else {
                    if (game.multiplayer) {

                        marcar(2, parseInt(this.id))
                        this.style.backgroundColor = Jogador2.cor
                        this.innerHTML = Jogador2.simbolo
                        document.getElementById('vezMenu1').innerHTML = 'Sua vez!'
                        document.getElementById('vezMenu1div').style.backgroundColor = 'rgba(6, 236, 64, 0.712)';
                        document.getElementById('vezMenu1div').style.boxShadow = '0 4px 8px 0 rgba(6, 236, 64, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
                        document.getElementById('vezMenu2').innerHTML = 'Aguarde!'
                        document.getElementById('vezMenu2div').style.backgroundColor = 'rgba(247, 0, 0, 0.712)'
                        document.getElementById('vezMenu2div').style.boxShadow = '0 4px 8px 0 rgba(247, 0, 0, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                        finaliza()
                    } else {
                        console.log('jogandocomputador');

                        jogadaComputador()
                    }
                }



            } else { alert('Posiçao já selecionada.') }

        } else { alert('Jogo ainda não começou.') }
    }
})

function finaliza() {

    if (game.turno == 1) {
        game.turno = 2
    } else {
        game.turno = 1
    }


    if (Jogador1.verificar()) {
        game.finalizado = true
        $('#painelVitoria').modal('show')
        document.getElementById('vitorianick').innerHTML = Jogador1.nick + ' Venceu!'
        game.placar.jogador1++
        document.getElementById('placarMenu1').innerHTML = game.placar.jogador1
    }
    if (Jogador2.verificar()) {
        game.finalizado = true
        $('#painelVitoria').modal('show')
        document.getElementById('vitorianick').innerHTML = Jogador2.nick + ' Venceu!'
        game.placar.jogador2++
        document.getElementById('placarMenu2').innerHTML = game.placar.jogador2
    }




    game.numJogadas++

    if (game.numJogadas == 9 && !game.finalizado) {
        $('#painelVitoria').modal('show')
        document.getElementById('vitorianick').innerHTML = 'Deu Velha #'
        game.placar.empates++
        document.getElementById('submenuVelhas').innerHTML = '# Velhas: ' + game.placar.empates
        // document.getElementById('submenuVelhasdiv').style.backgroundColor = 'rgba(247, 0, 0, 0.712)'
        document.getElementById('submenuVelhas').style.boxShadow = '0 2px 4px 0 rgba(187, 192, 192, 0.712), 0 3px 10px 0 rgba(0, 0, 0, 0.19)'
    }
}

function marcar(player, posicao) {
    console.log('player:', player, 'posicao', posicao);

    if (player == 1) {
        switch (posicao) {
            case 1:

                Jogador1.setJogada(0, 0)
                game.jogadas[0][0] = Jogador1.simbolo
                break;
            case 2:
                Jogador1.setJogada(0, 1)
                game.jogadas[0][1] = Jogador1.simbolo
                break;
            case 3:
                Jogador1.setJogada(0, 2)
                game.jogadas[0][2] = Jogador1.simbolo
                break;
            case 4:
                Jogador1.setJogada(1, 0)
                game.jogadas[1][0] = Jogador1.simbolo
                break;
            case 5:
                Jogador1.setJogada(1, 1)
                game.jogadas[1][1] = Jogador1.simbolo
                break;
            case 6:
                Jogador1.setJogada(1, 2)
                game.jogadas[1][2] = Jogador1.simbolo
                break;
            case 7:
                Jogador1.setJogada(2, 0)
                game.jogadas[2][0] = Jogador1.simbolo
                break;
            case 8:
                Jogador1.setJogada(2, 1)
                game.jogadas[2][1] = Jogador1.simbolo
                break;
            case 9:
                Jogador1.setJogada(2, 2)
                game.jogadas[2][2] = Jogador1.simbolo
                break;
            default:
                break;
        }
    } else {
        switch (posicao) {
            case 1:
                Jogador2.setJogada(0, 0)
                game.jogadas[0][0] = Jogador2.simbolo
                break;
            case 2:
                Jogador2.setJogada(0, 1)
                game.jogadas[0][1] = Jogador2.simbolo
                break;
            case 3:
                Jogador2.setJogada(0, 2)
                game.jogadas[0][2] = Jogador2.simbolo
                break;
            case 4:
                Jogador2.setJogada(1, 0)
                game.jogadas[1][0] = Jogador2.simbolo
                break;
            case 5:
                Jogador2.setJogada(1, 1)
                game.jogadas[1][1] = Jogador2.simbolo
                break;
            case 6:
                Jogador2.setJogada(1, 2)
                game.jogadas[1][2] = Jogador2.simbolo
                break;
            case 7:
                Jogador2.setJogada(2, 0)
                game.jogadas[2][0] = Jogador2.simbolo
                break;
            case 8:
                Jogador2.setJogada(2, 1)
                game.jogadas[2][1] = Jogador2.simbolo
                break;
            case 9:
                Jogador2.setJogada(2, 2)
                game.jogadas[2][2] = Jogador2.simbolo

            default:
                break;
        }
    }


}

function verificarPosicao(posicao) {
    posicao = parseInt(posicao)
    switch (posicao) {
        case 1:

            if (game.jogadas[0][0] == null) {
                return true
            } else {
                return false
            }

            break;
        case 2:

            if (game.jogadas[0][1] == null) {
                return true
            } else {
                return false
            }

            break;
        case 3:
            if (game.jogadas[0][2] == null) {
                return true
            } else {
                return false
            }
            break;
        case 4:
            if (game.jogadas[1][0] == null) {
                return true
            } else {
                return false
            }

            break;
        case 5:
            if (game.jogadas[1][1] == null) {
                return true
            } else {
                return false
            }

            break;
        case 6:
            if (game.jogadas[1][2] == null) {
                return true
            } else {
                return false
            }

            break;
        case 7:
            if (game.jogadas[2][0] == null) {
                return true
            } else {
                return false
            }

            break;
        case 8:
            if (game.jogadas[2][1] == null) {
                return true
            } else {
                return false
            }

            break;
        case 9:
            if (game.jogadas[2][2] == null) {
                return true
            } else {
                return false
            }

            break;
        default:
            break;
    }
}

function criarJogador1() {
    let nic = document.getElementById('nick1').value
    let simbol = document.getElementById('simbolo1').value
    cor = corJ1
    if (Jogador1 == undefined) {
        Jogador1 = new Jogador(nic, 0, simbol, cor)

    } else {
        alert('Jogador1 ja informado!!!')
    }
}
function criarJogador2() {
    let nic = document.getElementById('nick2').value
    let simbol = document.getElementById('simbolo2').value
    cor = corJ2
    if (Jogador2 == undefined) {
        Jogador2 = new Jogador(nic, 0, simbol,cor)
    } else {
        alert('Jogador2 ja informado!!!')
    }

}

function salvar() {
    criarJogador1()
    criarJogador2()
}

function sortearVez() {
    let variavel = Math.random()
    variavel = Math.round(variavel)
    if (Jogador1 != undefined && Jogador2 != undefined) {
        if (variavel % 2 == 0) {

            Jogador1.vez = 1
            Jogador2.vez = 2
        } else {
            Jogador1.vez = 2
            Jogador2.vez = 1
        }
    } else {
        alert('Todos jogadores devem ser informados!')
    }

}

function iniciar() {
    if (game.iniciado) {
        zerarTabuleiro()
    } else {
        sortearVez()
        document.getElementById('nickMenu1').innerHTML = Jogador1.nick
        document.getElementById('simboloMenu1').innerHTML = Jogador1.simbolo
        if (Jogador1.vez == 1) {
            document.getElementById('vezMenu1').innerHTML = 'Sua vez!'
            document.getElementById('vezMenu1div').style.backgroundColor = 'rgba(6, 236, 64, 0.712)';
            document.getElementById('vezMenu1div').style.boxShadow = '0 4px 8px 0 rgba(6, 236, 64, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
            document.getElementById('vezMenu2').innerHTML = 'Aguarde!'
            document.getElementById('vezMenu2div').style.backgroundColor = 'rgba(247, 0, 0, 0.712)'
            document.getElementById('vezMenu2div').style.boxShadow = '0 4px 8px 0 rgba(247, 0, 0, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

            game.turno = 1
        }
        document.getElementById('nickMenu2').innerHTML = Jogador2.nick
        document.getElementById('simboloMenu2').innerHTML = Jogador2.simbolo
        if (Jogador2.vez == 1) {
            document.getElementById('vezMenu2').innerHTML = 'Sua vez!'
            document.getElementById('vezMenu2div').style.backgroundColor = 'rgba(6, 236, 64, 0.712)';
            document.getElementById('vezMenu2div').style.boxShadow = '0 4px 8px 0 rgba(6, 236, 64, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
            document.getElementById('vezMenu1').innerHTML = 'Aguarde!'
            document.getElementById('vezMenu1div').style.backgroundColor = 'rgba(247, 0, 0, 0.712)'
            document.getElementById('vezMenu1div').style.boxShadow = '0 4px 8px 0 rgba(247, 0, 0, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

            game.turno = 1

        }
        game.iniciado = true
        game.iniciante = game.turno
        game.finalizado = false
        game.numJogadas = 0
        game.placar.empates = 0
        // let nivel
        // nivel = document.getElementById('nivel').value
        game.nivel =parseInt(document.getElementById('nivel').value)
        document.getElementById('placarMenu2').innerHTML = 0
        document.getElementById('placarMenu1').innerHTML = 0
       
         if(document.getElementById('multiplayer').value == 'computador')
            {
                game.multiplayer = false
                if (game.nivel == 0 )
                game.nivel = 1
            }
            else{game.multiplayer = true}

        if (game.turno == Jogador2.vez && !game.multiplayer) {
            jogadaComputador()
        }
    }
}

function zerarTabuleiro() {
    document.querySelectorAll('.celula')
    var x, i;
    x = document.querySelectorAll(".celula");
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML = ''
        x[i].style.backgroundColor = '#FFFAFA'
    }
    Jogador1.jogadas = [[, ,], [, ,], [, ,]]
    Jogador2.jogadas = [[, ,], [, ,], [, ,]]
    game.jogadas = [[, ,], [, ,], [, ,]]
    game.numJogadas = 0
    game.finalizado = false

    if (game.iniciante == 1) {
        game.iniciante = 2
        game.turno = game.iniciante
    } else {
        game.iniciante = 1
        game.turno = game.iniciante
    }

    if (Jogador1.vez == game.turno) {
        document.getElementById('vezMenu1').innerHTML = 'Sua vez!'
        document.getElementById('vezMenu1div').style.backgroundColor = 'rgba(6, 236, 64, 0.712)';
        document.getElementById('vezMenu1div').style.boxShadow = '0 4px 8px 0 rgba(6, 236, 64, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
        document.getElementById('vezMenu2').innerHTML = 'Aguarde!'
        document.getElementById('vezMenu2div').style.backgroundColor = 'rgba(247, 0, 0, 0.712)'
        document.getElementById('vezMenu2div').style.boxShadow = '0 4px 8px 0 rgba(247, 0, 0, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'


    }
    document.getElementById('nickMenu2').innerHTML = Jogador2.nick
    document.getElementById('simboloMenu2').innerHTML = Jogador2.simbolo
    if (Jogador2.vez == game.turno) {
        document.getElementById('vezMenu2').innerHTML = 'Sua vez!'
        document.getElementById('vezMenu2div').style.backgroundColor = 'rgba(6, 236, 64, 0.712)';
        document.getElementById('vezMenu2div').style.boxShadow = '0 4px 8px 0 rgba(6, 236, 64, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
        document.getElementById('vezMenu1').innerHTML = 'Aguarde!'
        document.getElementById('vezMenu1div').style.backgroundColor = 'rgba(247, 0, 0, 0.712)'
        document.getElementById('vezMenu1div').style.boxShadow = '0 4px 8px 0 rgba(247, 0, 0, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'



    }

    if (game.turno == Jogador2.vez) {
        jogadaComputador()
    }
}

function reiniciar() {
    location.reload();
}


function jogadaComputador() {
    if (game.nivel == 1) {
        nivel1()
    }
    if (game.nivel == 2) {
        nivel2()
    }
}

function nivel1() {

    var posicoes = () => {
        let num = []
        for (let index = 1; index <= 9; index++) {
            if (verificarPosicao(index)) {
                num.push(index)
            }

        }
        return num
    }


    var randomItem = posicoes()[Math.floor(Math.random() * posicoes().length)]

    console.log('posição aleatória: ', randomItem);

    var p = randomItem.toString()
    console.log('p: ', p);


    if (game.turno == Jogador2.vez) {
        marcar(2, randomItem)
        document.getElementById(p).style.backgroundColor = Jogador2.cor
        document.getElementById(p).innerHTML = Jogador2.simbolo
        document.getElementById('vezMenu1').innerHTML = 'Sua vez!'
        document.getElementById('vezMenu1div').style.backgroundColor = 'rgba(6, 236, 64, 0.712)'
        document.getElementById('vezMenu1div').style.boxShadow = '0 4px 8px 0 rgba(6, 236, 64, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
        document.getElementById('vezMenu2').innerHTML = 'Aguarde!'
        document.getElementById('vezMenu2div').style.backgroundColor = 'rgba(247, 0, 0, 0.712)'
        document.getElementById('vezMenu2div').style.boxShadow = '0 4px 8px 0 rgba(247, 0, 0, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

    }

    finaliza()

}

function nivel2() {

    var posicoes = () => {
        let num = []
        for (let index = 1; index <= 9; index++) {
            if (verificarPosicao(index)) {
                num.push(index)
            }

        }
        return num
    }
var p
var randomItem

   if(posicoes().length >=8 ){

     randomItem = posicoes()[Math.floor(Math.random() * posicoes().length)]
        console.log('posição primeira jogador 2 ', randomItem);

        var p = randomItem.toString()
        console.log('p: ', p);

    }else{

            let jogadasPossiveis = []
                jogadasPossiveis.length = 0 
            
            if (verificarjogadasPossiveis(0, 1, 2) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(0, 1, 2)) //correto 1

            if (verificarjogadasPossiveis(0, 2, 1) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(0, 2, 1))

            if (verificarjogadasPossiveis(0, 3, 6) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(0, 3, 6))

            if (verificarjogadasPossiveis(0, 6, 3 > 0))
                jogadasPossiveis.push(verificarjogadasPossiveis(0, 6, 3))

            if (verificarjogadasPossiveis(0, 4, 8) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(0, 4, 8))

            if (verificarjogadasPossiveis(0, 8, 4) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(0, 8, 4))

            if (verificarjogadasPossiveis(1, 4, 7) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(1, 4, 7)) //correto 2

            if (verificarjogadasPossiveis(1, 7, 4) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(1, 7, 4))

            if (verificarjogadasPossiveis(1, 0, 2) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(1, 0, 2))

            if (verificarjogadasPossiveis(1, 2, 0) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(1, 2, 0))

            if (verificarjogadasPossiveis(2, 5, 8) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(2, 5, 8)) //correto 3

            if (verificarjogadasPossiveis(2, 8, 5) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(2, 8, 5))

            if (verificarjogadasPossiveis(2, 4, 6) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(2, 4, 6))

            if (verificarjogadasPossiveis(2, 6, 4) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(2, 6, 4))

            if (verificarjogadasPossiveis(2, 0, 1) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(2, 0, 1))

            if (verificarjogadasPossiveis(2, 1, 0) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(2, 1, 0))

            if (verificarjogadasPossiveis(3, 4, 5) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(3, 4, 5)) //correto 4

            if (verificarjogadasPossiveis(3, 5, 4) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(3, 5, 4))

            if (verificarjogadasPossiveis(3, 0, 6) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(3, 0, 6))

            if (verificarjogadasPossiveis(3, 6, 0) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(3, 6, 0))

            if (verificarjogadasPossiveis(6, 7, 8) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(6, 7, 8)) //correto 7

            if (verificarjogadasPossiveis(6, 8, 7) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(6, 8, 7))

            if (verificarjogadasPossiveis(6, 4, 2) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(6, 4, 2))

            if (verificarjogadasPossiveis(6, 2, 4) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(6, 2, 4))

            if (verificarjogadasPossiveis(6, 0, 3) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(6, 0, 3))

            if (verificarjogadasPossiveis(6, 3, 0) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(6, 3, 0))

            if (verificarjogadasPossiveis(5, 2, 8) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(5, 2, 8)) //correto 6

            if (verificarjogadasPossiveis(5, 8, 2) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(5, 8, 2))

            if (verificarjogadasPossiveis(5, 3, 4) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(5, 3, 4))

            if (verificarjogadasPossiveis(5, 4, 3) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(5, 4, 3))

            if (verificarjogadasPossiveis(7, 6, 8) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(7, 6, 8)) //corrto 8

            if (verificarjogadasPossiveis(7, 8, 6) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(7, 8, 6))

            if (verificarjogadasPossiveis(7, 4, 1) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(7, 4, 1))

            if (verificarjogadasPossiveis(7, 1, 4) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(7, 1, 4))

            if (verificarjogadasPossiveis(8, 6, 7) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(8, 6, 7)) //correto 9

            if (verificarjogadasPossiveis(8, 7, 6) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(8, 7, 6))

            if (verificarjogadasPossiveis(8, 2, 5) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(8, 2, 5))

            if (verificarjogadasPossiveis(8, 5, 2) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(8, 5, 2))

            if (verificarjogadasPossiveis(8, 0, 4) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(8, 0, 4))

            if (verificarjogadasPossiveis(8, 4, 0) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(8, 4, 0))

            if (verificarjogadasPossiveis(4, 0, 8) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(4, 0, 8)) //correto 5.1

            if (verificarjogadasPossiveis(4, 8, 0) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(4, 8, 0))

            if (verificarjogadasPossiveis(4, 1, 7) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(4, 1, 7)) //correto 5.2

            if (verificarjogadasPossiveis(4, 7, 1) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(4, 7, 1))

            if (verificarjogadasPossiveis(4, 2, 6) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(4, 2, 6)) //correto 5.3

            if (verificarjogadasPossiveis(4, 6, 2) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(4, 6, 2))

            if (verificarjogadasPossiveis(4, 3, 5) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(4, 3, 5)) //correto 5.4

            if (verificarjogadasPossiveis(4, 5, 3) > 0)
                jogadasPossiveis.push(verificarjogadasPossiveis(4, 5, 3))


        console.log('jogadas possiveis:', jogadasPossiveis)

        
        randomItem = jogadasPossiveis[Math.floor(Math.random()*jogadasPossiveis.length)]

        if(randomItem == undefined)
            randomItem = posicoes()[Math.floor(Math.random() * posicoes().length)]

        console.log('jogadas do turno:', randomItem)

        
    }
   
    if(jogadaVencedoraJogador1()!=0){
        let n = jogadaVencedoraJogador1()
        if (verificarPosicao(n))
            randomItem = n
            console.log('randon dentro do if:', randomItem)
    }
    p = randomItem.toString()
    console.log('p',p)
    if (game.turno == Jogador2.vez) {
        marcar(2, randomItem)
        document.getElementById(p).style.backgroundColor = Jogador2.cor
        document.getElementById(p).innerHTML = Jogador2.simbolo
        document.getElementById('vezMenu1').innerHTML = 'Sua vez!'
        document.getElementById('vezMenu1div').style.backgroundColor = 'rgba(6, 236, 64, 0.712)'
        document.getElementById('vezMenu1div').style.boxShadow = '0 4px 8px 0 rgba(6, 236, 64, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
        document.getElementById('vezMenu2').innerHTML = 'Aguarde!'
        document.getElementById('vezMenu2div').style.backgroundColor = 'rgba(247, 0, 0, 0.712)'
        document.getElementById('vezMenu2div').style.boxShadow = '0 4px 8px 0 rgba(247, 0, 0, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

    }
    finaliza()

}

function verificarjogadasPossiveis(verificada, p1, p2) {
    let listaPosicoes = [, , , , , , , ,]
    let gameJogadas = [, , , , , , , ,]

    listaPosicoes[0] = Jogador2.jogadas[0][0]
    listaPosicoes[1] = Jogador2.jogadas[0][1]
    listaPosicoes[2] = Jogador2.jogadas[0][2]
    listaPosicoes[3] = Jogador2.jogadas[1][0]
    listaPosicoes[4] = Jogador2.jogadas[1][1]
    listaPosicoes[5] = Jogador2.jogadas[1][2]
    listaPosicoes[6] = Jogador2.jogadas[2][0]
    listaPosicoes[7] = Jogador2.jogadas[2][1]
    listaPosicoes[8] = Jogador2.jogadas[2][2]

    gameJogadas[0] = game.jogadas[0][0] //1
    gameJogadas[1] = game.jogadas[0][1] //2
    gameJogadas[2] = game.jogadas[0][2] //3
    gameJogadas[3] = game.jogadas[1][0] //4
    gameJogadas[4] = game.jogadas[1][1] //5
    gameJogadas[5] = game.jogadas[1][2] //6
    gameJogadas[6] = game.jogadas[2][0] //7
    gameJogadas[7] = game.jogadas[2][1] //8
    gameJogadas[8] = game.jogadas[2][2] //9
    let p
    //let jogadasPossiveis = []
    if (gameJogadas[verificada] == Jogador2.simbolo) {
        if (!gameJogadas[p1]) {
            if (gameJogadas[p2] == Jogador2.simbolo || !gameJogadas[p2]) {
                p = p1 + 1
                return p
            }
            //jogadasPossiveis.push(verificada)
        }
    } else { return 0 }

}

function jogadaVencedoraJogador1(){
    let gameJogadas = []
    let proxJogada = 0

    gameJogadas[0] = game.jogadas[0][0] //1
    gameJogadas[1] = game.jogadas[0][1] //2
    gameJogadas[2] = game.jogadas[0][2] //3
    gameJogadas[3] = game.jogadas[1][0] //4
    gameJogadas[4] = game.jogadas[1][1] //5
    gameJogadas[5] = game.jogadas[1][2] //6
    gameJogadas[6] = game.jogadas[2][0] //7
    gameJogadas[7] = game.jogadas[2][1] //8
    gameJogadas[8] = game.jogadas[2][2] //9

    //123
    if(gameJogadas[0] == Jogador1.simbolo && gameJogadas[1] == Jogador1.simbolo){
        proxJogada = 3  
    }
    if(gameJogadas[0] == Jogador1.simbolo && gameJogadas[2] == Jogador1.simbolo){
        proxJogada = 2  
    }
    if(gameJogadas[1] == Jogador1.simbolo && gameJogadas[2] == Jogador1.simbolo){
        proxJogada = 1  
    }

    //147
    if(gameJogadas[0] == Jogador1.simbolo && gameJogadas[3] == Jogador1.simbolo){
        proxJogada = 7  
    }
    if(gameJogadas[0] == Jogador1.simbolo && gameJogadas[6] == Jogador1.simbolo){
        proxJogada = 4  
    }
    if(gameJogadas[3] == Jogador1.simbolo && gameJogadas[6] == Jogador1.simbolo){
        proxJogada = 1  
    }

    //159
    if(gameJogadas[0] == Jogador1.simbolo && gameJogadas[4] == Jogador1.simbolo){
        proxJogada = 9  
    }
    if(gameJogadas[0] == Jogador1.simbolo && gameJogadas[8] == Jogador1.simbolo){
        proxJogada = 5  
    }
    if(gameJogadas[4] == Jogador1.simbolo && gameJogadas[8] == Jogador1.simbolo){
        proxJogada = 1  
    }

    //456
    if(gameJogadas[3] == Jogador1.simbolo && gameJogadas[4] == Jogador1.simbolo){
        proxJogada = 6  
    }
    if(gameJogadas[3] == Jogador1.simbolo && gameJogadas[5] == Jogador1.simbolo){
        proxJogada = 5  
    }
    if(gameJogadas[4] == Jogador1.simbolo && gameJogadas[5] == Jogador1.simbolo){
        proxJogada = 4  
    }

    //789
    if(gameJogadas[6] == Jogador1.simbolo && gameJogadas[7] == Jogador1.simbolo){
        proxJogada = 9  
    }
    if(gameJogadas[6] == Jogador1.simbolo && gameJogadas[8] == Jogador1.simbolo){
        proxJogada = 8  
    }
    if(gameJogadas[7] == Jogador1.simbolo && gameJogadas[8] == Jogador1.simbolo){
        proxJogada = 7  
    }
    //258
    if(gameJogadas[1] == Jogador1.simbolo && gameJogadas[4] == Jogador1.simbolo){
        proxJogada = 8  
    }
    if(gameJogadas[1] == Jogador1.simbolo && gameJogadas[7] == Jogador1.simbolo){
        proxJogada = 5  
    }
    if(gameJogadas[4] == Jogador1.simbolo && gameJogadas[7] == Jogador1.simbolo){
        proxJogada = 2  
    }

    //369
    if(gameJogadas[2] == Jogador1.simbolo && gameJogadas[5] == Jogador1.simbolo){
        proxJogada = 9  
    }
    if(gameJogadas[2] == Jogador1.simbolo && gameJogadas[8] == Jogador1.simbolo){
        proxJogada = 6  
    }
    if(gameJogadas[5] == Jogador1.simbolo && gameJogadas[8] == Jogador1.simbolo){
        proxJogada = 3  
    }

    //357
    if(gameJogadas[2] == Jogador1.simbolo && gameJogadas[4] == Jogador1.simbolo){
        proxJogada = 7  
    }
    if(gameJogadas[2] == Jogador1.simbolo && gameJogadas[6] == Jogador1.simbolo){
        proxJogada = 5  
    }
    if(gameJogadas[4] == Jogador1.simbolo && gameJogadas[6] == Jogador1.simbolo){
        proxJogada = 3
    }

    return proxJogada

}

function executarJogadaComputador(posicao) {
    if (game.turno == Jogador2.vez) {
        marcar(2, posicao)
        document.getElementById(p).style.backgroundColor = Jogador2.cor
        document.getElementById(p).innerHTML = Jogador2.simbolo
        document.getElementById('vezMenu1').innerHTML = 'Sua vez!'
        document.getElementById('vezMenu1div').style.backgroundColor = 'rgba(6, 236, 64, 0.712)'
        document.getElementById('vezMenu1div').style.boxShadow = '0 4px 8px 0 rgba(6, 236, 64, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
        document.getElementById('vezMenu2').innerHTML = 'Aguarde!'
        document.getElementById('vezMenu2div').style.backgroundColor = 'rgba(247, 0, 0, 0.712)'
        document.getElementById('vezMenu2div').style.boxShadow = '0 4px 8px 0 rgba(247, 0, 0, 0.712), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

    }
}