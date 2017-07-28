import queen from './pieces/queen'
import bishop from './pieces/bishop'
import rook from './pieces/rook'
import pawn from './pieces/pawn'
import king from './pieces/king'
import horse from './pieces/horse'

function moves (space, board) {
  const piece = space.children[0]
  const values = space.id.split(',')
  const vector = { x: Number(values[0]), y: Number(values[1]) }
  let moves = null

  if (piece.id.includes('pawn')) {
    moves = pawn(vector, board, piece)
  }
  if (piece.id.includes('queen')) {
    moves = queen(vector, board, piece)
  }
  if (piece.id.includes('bishop')) {
    moves = bishop(vector, board, piece)
  }
  if (piece.id.includes('rook')) {
    moves = rook(vector, board, piece)
  }
  if (piece.id.includes('king')) {
    moves = king(vector, board, piece)
  }
  if (piece.id.includes('horse')) {
    moves = horse(vector, board, piece)
  }
  return moves
}

// if vector is inside of an array of vectors
export function validate (v, moves) {
  let isMove = false
  moves.forEach((m) => {
    if (m.x === v.x && m.y === v.y) {
      isMove = true
    }
  })
  return isMove
}

export default moves
