let playCount = 0
let board = ['', '', '', '', '', '', '', '', '']
let symbols = ["x", "o"]
let gameOver = false

let x = 0
let o = 0
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
// onload = setTimeout( function () { document.getElementById("bot").innerText = '👨‍🦲' },30)
let botOn = false
let handleMove = (position) => {
    if (gameOver == true) {
        return
    }
    if (board[position] == '') {
        board[position] = symbols[playCount]
        gameOver = isWin()
        setTimeout(() => {
            if (gameOver == true) {
                vitoria.style.backgroundColor = "rgba(255, 0, 85, 0.753)"
                vitoria.style.width = "400px"
                vitoria.style.height = "400px"
                vitoria.style.transition = "background-color 0.8s ease-out"
                vitoria.style.position = "absolute"
                vitoria.style.top = "20px"
                vitoria.style.left = "50%"
                vitoria.style.transform = "translateX(-50%)"
                vitoria.style.display = "flex"
                vitoria.style.justifyContent = "center"
                vitoria.style.alignItems = "center"
                vitoria.style.fontSize = "18px"
                playCount = (playCount == 0) ? 1 : 0
                vitoria.innerText = `Parabéns! O jogador "${symbols[playCount].toUpperCase()}" venceu!`
                if (symbols[playCount] == "x") {
                    x++
                    px.innerText = `❌ - ${x}`
                }
                if (symbols[playCount] == "o") {
                    o++
                    pbola.innerText = `🔵 - ${o}`
                }
            }
        }, 10)
        playCount = (playCount == 0) ? 1 : 0
        return gameOver, botFunc()
    }
}

let isWin = () => {
    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i]
        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]
        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '') {
            return true
        }
    }
    return false
}
let botOnOffSwitch = () => {
    if (document.getElementById("bot").innerText == "🤖") {
        document.getElementById("bot").innerText = "👨‍🦲"
    } else {
        document.getElementById("bot").innerText = "🤖"
    }
    if (botOn == true) { return botOn = false, console.log(botOn) }
    if (botOn == false) { return botOn = true, console.log(botOn) }
}

let botFunc = () => {
    if (botOn == true) {
        setTimeout(() => {
            let rand = Math.floor(Math.random() * (9))
            let roboTime = playCount
            if (roboTime == 0) {
                return
            }
            while (roboTime == 1) {
                console.log(rand)
                while (board[rand] != '') {
                    rand = Math.floor(Math.random() * (9))
                    console.log(rand)
                    if (board[0] != '' && board[1] != '' && board[2] != '' && board[3] != '' && board[4] != '' && board[5] != '' && board[6] != '' && board[7] != '' && board[8] != '') {
                        return
                    }
                } if (board[rand] == '') {
                    console.log(rand)
                    board[rand] = 'o'
                    for (let k = 0; k < board.length; k++) {
                        if (board[k] == "o") {
                            let square = document.getElementById(rand)
                            square.innerHTML = `<div class ='o'></div>`
                        }
                    }

                    roboTime = 0
                    gameOver = isWin()
                }
                playCount = (playCount == 0) ? 1 : 0
                if (gameOver == true) {
                    vitoria.style.backgroundColor = "rgba(255, 0, 85, 0.753)"
                    vitoria.style.width = "400px"
                    vitoria.style.height = "400px"
                    vitoria.style.transition = "background-color 0.8s ease-out"
                    vitoria.style.position = "absolute"
                    vitoria.style.top = "20px"
                    vitoria.style.left = "50%"
                    vitoria.style.transform = "translateX(-50%)"
                    vitoria.style.display = "flex"
                    vitoria.style.justifyContent = "center"
                    vitoria.style.alignItems = "center"
                    vitoria.style.fontSize = "18px"
                    playCount = (playCount == 0) ? 1 : 0
                    vitoria.innerText = `Parabéns! O jogador "${symbols[playCount].toUpperCase()}" venceu!`
                    if (symbols[playCount] == "x") {
                        x++
                        px.innerText = `❌ - ${x}`
                    }
                    if (symbols[playCount] == "o") {
                        o++
                        pbola.innerText = `🔵 - ${o}`
                    }
                }
                return gameOver
            }

        }, 500);
    }

}


let turnBotOff = () => {
    console.log("robo desligado")
}



