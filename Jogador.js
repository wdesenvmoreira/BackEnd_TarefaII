class Jogador {
    constructor(nick, vez, simbolo, cor) {
        this.nick = nick
        this.vez = vez
        this.simbolo = simbolo
        this.jogadas = [[, ,], [, ,], [, ,]]
        this.cor = cor
    }

    setJogada(i, j) {
        console.log('i:', i, 'j:', j);
        this.jogadas[i][j] = 1

    }


    verificar() {
        var a = this.jogadas[0][0]
        var b = this.jogadas[0][1]
        var c = this.jogadas[0][2]
        var d = this.jogadas[1][0]
        var e = this.jogadas[1][1]
        var f = this.jogadas[1][2]
        var g = this.jogadas[2][0]
        var h = this.jogadas[2][1]
        var i = this.jogadas[2][2]

        if (a & b & c)
            return true

        if (a & d & g)
            return true

        if (a & e & i)
            return true


        if (b & e & h)
            return true


        if (c & f & i)
            return true


        if (d & e & f)
            return true


        if (g & h & i)
            return true


        if (c & e & g)
            return true

        return false
    }
}

