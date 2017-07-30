import chessGame from '../ChessGame'
import * as vFn from '../vectors'

function pawn (vector, board, piece) {
  let moves = []
  let mVector = { ...vector }
  let aVector = { ...vector }
  const player = chessGame.state.bottom
  const direction = piece.id.includes(player) ? 1 : -1
  let m = 0
  // check if pawn has moved...
  if (direction === 1 && vector.x > 1) {
    m = 1
  }
  if (direction === -1 && vector.x < 6) {
    m = 1
  }
  // pawns moves
  while (m < 2) {
    mVector.x += direction
    const piece = board[mVector.x][mVector.y].children[0]
    if (piece.id.includes('empty')) {
      if (board[mVector.x][mVector.y].className.includes('black')) {
        board[mVector.x][mVector.y].classList.add('board__moves-blk')
      } else {
        board[mVector.x][mVector.y].classList.add('board__moves-wht')
      }
      moves = [...moves, { ...mVector }]
    }
    m++
  }

  // pawn attack
  let a = 0
  let enemy = null
  while (a < 2) {
    if (direction === 1) {
      enemy = 'blk'
      aVector = a === 1 ? vFn.northWest(vector) : vFn.northEast(vector)
    }
    if (direction - 1) {
      enemy = 'wht'
      aVector = a === 1 ? vFn.southWest(vector) : vFn.southEast(vector)
    }

    if (vFn.isBoard(aVector)) {
      const piece = board[aVector.x][aVector.y].children[0]
      if (piece.id.includes(enemy)) {
        if (board[aVector.x][aVector.y].className.includes('black')) {
          board[aVector.x][aVector.y].classList.add('board__attack-blk')
        } else {
          board[aVector.x][aVector.y].classList.add('board__attack-wht')
        }
        moves = [...moves, aVector]
      }
    }
    a++
  }
  return moves
}

export default pawn
