import queen from './moves/queen'
import bishop from './moves/bishop'
import rook from './moves/rook'
import pawn from './moves/pawn'
import king from './moves/king'
import horse from './moves/horse'
import enemyMoves from './moves/enemyMoves'

function moves (space, board, type) {
  const piece = space.children[0]
  const values = space.id.split(',')
  const vector = { x: Number(values[0]), y: Number(values[1]) }
  let moves = null

  if (piece.id.includes('pawn')) {
    moves = pawn(vector, board, piece)
    // console.log(moves)
  }
  if (piece.id.includes('queen')) {
    return queen(vector, board, piece)
  }
  if (piece.id.includes('bishop')) {
    moves = bishop(vector, board, piece, type)
    // console.log(moves)
  }
  if (piece.id.includes('rook')) {
    moves = rook(vector, board, piece)
  }
  if (piece.id.includes('king')) {
    moves = null
    const test = enemyMoves(board, piece.id.split('-')[0])
    moves = king(vector, board, piece, test)
  }
  if (piece.id.includes('horse')) {
    moves = horse(vector, board, piece, type)
  }
  return moves
}

// if vector is inside of an array of vectors
export function validate (v, moves, player, kingVector) {
  let isMove = false
  moves.forEach((m) => {
    if (m.x === v.x && m.y === v.y) {
      isMove = true
    }
  })
  // check to see if player has moved into check
  // temporarily move piece
  return isMove
}

export default moves
