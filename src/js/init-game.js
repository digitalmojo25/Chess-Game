import * as Blk from './blackPieces'
import * as Wht from './whitePieces'

const DomBoard = document.querySelector('.board')

const emptyBoard = [[], [], [], [], [], [], [], []]
const board = []
// put dom elements into a standard array
emptyBoard.forEach((r, i) => {
  const row = []
  for (var c = 0; c < 8; c++) {
    row.push(DomBoard.children[i].children[c])
  }
  board.push(row)
})
// reverse the order of the rows so that [0, 0] is the bottom left corner
board.reverse()
console.log(board)

// place pieces on the board
const setPiece = function (vector, piece) {
  board.forEach((row, x) => {
    row.forEach((space, y) => {
      if (vector.x === x && vector.y === y) {
        console.log(board[x][y], piece)
        // debugger;
        board[x][y].appendChild(piece)
      }
    })
  })
}

setPiece({x: 0, y: 0}, Blk.rook2)
