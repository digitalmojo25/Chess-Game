import * as moves from './index'

// put enemy pieces on the board into an array
function enemyMoves (board, player, attacks) {
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
        if (typeof type === 'string') {
          let vectors = []
          if (type === 'pawn') {
            vectors = moves.pawn(vector, board, piece, false).filter((m) => {
              if ('a' in m) {
                delete m.a
                return m
              }
            })
          } else {
            vectors = moves[type](vector, board, piece, false)
          }
          // console.log('enemyMoves', type)
          enemyMoves = [...enemyMoves, ...vectors]
        }
      }
    })
  })
  return enemyMoves
}

export default enemyMoves
