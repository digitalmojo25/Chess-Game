import chessGame from '../ChessGame'
import moves from '../moves'

// Find out if a piece can be taken on the next turn
// This require to know if the king is in check from a 
// a piece which has not been moved
// this is also require to know if a checking piece can
// be taken after it has checked the king

// attackPiece take player['wht' || 'blk'], piece[{ x, y }]
function attackPiece (player, piece) {
  const board = chessGame.board
  const eSpaces = []

  // get all enemy pieces
  board.forEach((row, x) => {
    row.forEach((space, y) => {
      if (space.children[0].id.includes(player)) {
        eSpaces.push(space)
      }
    })
  })

  let eMoves = []
  let attacker = null
  eSpaces.forEach((s) => {
    // debugger
    let vectors = []
    if (s.children[0].id.includes('pawn')) {
      vectors = moves(s, board).filter((m) => {
        if ('a' in m) {
          delete m.a
          return m
        }
      }).map(m => JSON.stringify(m))
      vectors.forEach((v) => {
        const vector = JSON.parse(v)
        if (board[vector.x][vector.y].children[0].id.includes('king')) {
          attacker = s
        }
      })
    } else {
      vectors = moves(s, board).map(m => JSON.stringify(m))
      vectors.forEach((v) => {
        const vector = JSON.parse(v)
        if (board[vector.x][vector.y].children[0].id.includes('king')) {
          attacker = s
        }
      })
    }
    eMoves = [ ...eMoves, ...vectors ]
  })
  // debugger
  if (eMoves.includes(JSON.stringify(piece))) {
    let type = board[piece.x][piece.y].children[0].id.split('-')[1]
    console.log(`The ${type} piece can be taken`)
    return attacker
  }
  return false
}

export default attackPiece
