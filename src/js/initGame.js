import chessGame from './ChessGame'
import * as Blk from './blackPieces'
import * as Wht from './whitePieces'
import gameLogic from './gameLogic'
import moves from './moves'

function initGame () {
  const DomBoard = document.querySelector('.board')
  const startButton = document.getElementById('start-button')
  const emptyBoard = [[], [], [], [], [], [], [], []]
  const board = []

  // put dom elements into a standard array
  // so that we can use standard array methods
  // on our chass board
  emptyBoard.forEach((row, x) => {
    for (var y = 0; y < 8; y++) {
      // fill everyspace with an empty space
      const empty = document.createElement('div')
      empty.classList.add('chess-piece')
      empty.setAttribute('id', 'empty')
      const space = DomBoard.children[x].children[y]
      space.appendChild(empty)
      row.push(space)
    }
    board.push(row)
  })

  // reverse the order of the rows so that
  // [0, 0] is the bottom left corner
  board.reverse()

  function mouseoverHandler () {
    moves(this, board)
  }

  function mouseleaveHandler () {
    // clear move styles
    board.forEach((row, x) => {
      row.forEach((space, y) => {
        board[x][y].classList.remove('board__moves-blk')
        board[x][y].classList.remove('board__moves-wht')
        board[x][y].classList.remove('board__attack-blk')
        board[x][y].classList.remove('board__attack-wht')
      })
    })
  }

  // The game is primarily driven by click on the board
  function spaceClickHandler () {
    const space = this.id.split(',')
    const vector = { x: Number(space[0]), y: Number(space[1]) }
    chessGame.setSpace(vector)
    gameLogic(this)
  }

  // init coordinate system into space element ids
  // add mouse over and click events to each space
  board.forEach((row, x) => {
    row.forEach((space, y) => {
      space.setAttribute('id', `${x}, ${y}`)
      space.addEventListener('mouseover', mouseoverHandler, false)
      space.addEventListener('mouseleave', mouseleaveHandler, false)
      space.addEventListener('click', spaceClickHandler, false)
    })
  })

  chessGame.board = board

  // TODO: allow for switching sides...
  // place pieces on the board
  for (const key in Wht) {
    if (key === 'king') chessGame.initPiece({x: 0, y: 3}, Wht[key])
    else if (key === 'queen') chessGame.initPiece({x: 0, y: 4}, Wht[key])
    else if (key === 'bishop1') chessGame.initPiece({x: 0, y: 2}, Wht[key])
    else if (key === 'bishop2') chessGame.initPiece({x: 0, y: 5}, Wht[key])
    else if (key === 'horse1') chessGame.initPiece({x: 0, y: 1}, Wht[key])
    else if (key === 'horse2') chessGame.initPiece({x: 0, y: 6}, Wht[key])
    else if (key === 'rook1') chessGame.initPiece({x: 0, y: 0}, Wht[key])
    else if (key === 'rook2') chessGame.initPiece({x: 0, y: 7}, Wht[key])
    else if (key === 'pawn1') chessGame.initPiece({x: 1, y: 0}, Wht[key])
    else if (key === 'pawn2') chessGame.initPiece({x: 1, y: 1}, Wht[key])
    else if (key === 'pawn3') chessGame.initPiece({x: 1, y: 2}, Wht[key])
    else if (key === 'pawn4') chessGame.initPiece({x: 1, y: 3}, Wht[key])
    else if (key === 'pawn5') chessGame.initPiece({x: 1, y: 4}, Wht[key])
    else if (key === 'pawn6') chessGame.initPiece({x: 1, y: 5}, Wht[key])
    else if (key === 'pawn7') chessGame.initPiece({x: 1, y: 6}, Wht[key])
    else if (key === 'pawn8') chessGame.initPiece({x: 1, y: 7}, Wht[key])
  }

  for (const key in Blk) {
    if (key === 'king') chessGame.initPiece({x: 7, y: 3}, Blk[key])
    else if (key === 'queen') chessGame.initPiece({x: 7, y: 4}, Blk[key])
    else if (key === 'bishop1') chessGame.initPiece({x: 7, y: 2}, Blk[key])
    else if (key === 'bishop2') chessGame.initPiece({x: 7, y: 5}, Blk[key])
    else if (key === 'horse1') chessGame.initPiece({x: 7, y: 1}, Blk[key])
    else if (key === 'horse2') chessGame.initPiece({x: 7, y: 6}, Blk[key])
    else if (key === 'rook1') chessGame.initPiece({x: 7, y: 0}, Blk[key])
    else if (key === 'rook2') chessGame.initPiece({x: 7, y: 7}, Blk[key])
    else if (key === 'pawn1') chessGame.initPiece({x: 6, y: 0}, Blk[key])
    else if (key === 'pawn2') chessGame.initPiece({x: 6, y: 1}, Blk[key])
    else if (key === 'pawn3') chessGame.initPiece({x: 6, y: 2}, Blk[key])
    else if (key === 'pawn4') chessGame.initPiece({x: 6, y: 3}, Blk[key])
    else if (key === 'pawn5') chessGame.initPiece({x: 6, y: 4}, Blk[key])
    else if (key === 'pawn6') chessGame.initPiece({x: 6, y: 5}, Blk[key])
    else if (key === 'pawn7') chessGame.initPiece({x: 6, y: 6}, Blk[key])
    else if (key === 'pawn8') chessGame.initPiece({x: 6, y: 7}, Blk[key])
  }

  function startGameTimeHandler () {
    const time = document.getElementById('count-down').innerHTML.split(':')
    chessGame.startTimer(time)
  }
  startButton.addEventListener('click', startGameTimeHandler, false)
}

initGame()

export default initGame
