import * as moves from './index'

// put enemy pieces on the board into an array
function enemyMoves (board, player) {
  let enemy = 'wht'
  if (player === 'wht') {
    enemy = 'blk'
  }
  let enemyMoves = []
  board.forEach((row, x) => {
    row.forEach((space, y) => {
      if (board[x][y].children[0].id.includes(enemy)) {
        const type = board[x][y].children[0].id.split('-')[1]
        const vector = {x, y}
        const piece = board[x][y].children[0]
        enemyMoves = [...enemyMoves, ...(moves[type](vector, board, piece, false))]
      }
    })
  })
  return enemyMoves
}

export default enemyMoves
