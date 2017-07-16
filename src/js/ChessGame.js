class ChessGame {
  constructor (board) {
    this.board = board
  }
  setPiece (vector, piece) {
    this.board.forEach((row, x) => {
      row.forEach((space, y) => {
        if (vector.x === x && vector.y === y) {
          // console.log(board[x][y], piece)
          this.board[x][y].appendChild(piece)
        }
      })
    })
  }
}

export default ChessGame
