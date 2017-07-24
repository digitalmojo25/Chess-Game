// TODO: add a timer to track how long it takes per turn
// TODO: allow user to set amount of time per turn
// TODO: show count down in header
import moves from './moves'

class ChessGame {
  constructor (board) {
    this.state = {
      started: false,
      top: 'blk',
      bottom: 'wht',
      turn: 'wht',
      current: null
    }
    this.board = board
    this.pSpace = null
    this.space = null
    // this.select2 = null
    this.moves = null
  }

  setPiece (vector, piece) {
    this.board.forEach((row, x) => {
      row.forEach((space, y) => {
        if (vector.x === x && vector.y === y) {
          // remove empty div
          this.board[x][y].children[0].parentNode.removeChild(this.board[x][y].children[0])
          this.board[x][y].appendChild(piece)

          // replace moved piece with an empty space
          const empty = document.createElement('div')
          empty.classList.add('chess-piece')
          empty.setAttribute('id', 'empty')
          this.board[this.pSpace.x][this.pSpace.y].appendChild(empty)

          // change turn
          this.state.turn = this.state.turn === 'wht' ? 'blk' : 'wht'
          // reset move/turn values
          this.pSpace = null
          this.space = null
        }
      })
    })
  }

  // set moves (moves) {
  //   return moves
  // }

  setSpace (vector) {
    this.board.forEach((row, x) => {
      row.forEach((space, y) => {
        this.board[x][y].classList.remove('board__selected')
        if (vector.x === x && vector.y === y) {
          // high light selected space
          this.board[x][y].classList.add('board__selected')
          this.space = this.board[x][y]
        }
      })
    })
  }

  initPiece (vector, piece) {
    this.board.forEach((row, x) => {
      row.forEach((space, y) => {
        if (vector.x === x && vector.y === y) {
          // remove empty div
          this.board[x][y].children[0].parentNode.removeChild(this.board[x][y].children[0])
          this.board[x][y].appendChild(piece)
        }
      })
    })
  }
}

export default ChessGame
