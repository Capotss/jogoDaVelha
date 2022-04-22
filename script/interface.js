let vitoria = document.getElementsByClassName("vitoria")[0]
let px = document.getElementById("pX")
let pbola = document.getElementById("pBola")

document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
})


// executa a ação mudando a imagem do quadrado que foi clicado
let handleClick = (e) => {
    let square = e.target
    let position = square.id
    handleMove(position)
    updateSquare(position)
}

let updateSquare = (position) => {
    try {
        let square = document.getElementById(position.toString())
        let symbol = board[position]
        if (square.innerHTML != '') {
            return
        }
        square.innerHTML = `<div class ='${symbol}'></div>`
    } catch {
        handleMove()
    }

}


let reset = () => {
    let squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.innerHTML = ``
    })
    handleMove()
    board = ['', '', '', '', '', '', '', '', '']
    isWin()
    gameOver = false
    vitoria.style=""
    vitoria.innerText=""
    playCount = 0
}
