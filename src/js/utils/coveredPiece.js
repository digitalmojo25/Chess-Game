import chessGame from '../ChessGame'
import moves from '../moves'

// Find out if a piece id being protected by one of 
// the players other pieces

// attackPiece take player['wht' || 'blk'], piece[{ x, y }]
function coveredPiece (player, piece) {
  console.log(piece.id)
  const board = chessGame.board
  const pSpaces = []

  // get all of players pieces
  board.forEach((row, x) => {
    row.forEach((space, y) => {
      if (space.children[0].id.includes(player)) {
        pSpaces.push(space)
      }
    })
  })

  let pMoves = []
  pSpaces.forEach((s) => {
    // debugger
    let vectors = []
    if (s.children[0].id.includes('pawn')) {
      vectors = moves(s, board, 'covered').filter((m) => {
        if ('a' in m) {
          delete m.a
          return m
        }
      }).map(m => JSON.stringify(m))
    } else {
      vectors = moves(s, board, 'covered').map(m => JSON.stringify(m))
    }
    pMoves = [ ...pMoves, ...vectors ]
  })
  // debugger
  if (pMoves.includes(JSON.stringify(piece))) {
    let type = board[piece.x][piece.y].children[0].id.split('-')[1]
    console.log(`The ${type} piece is protected`)
    return true
  }
  return false
}

export default coveredPiece
