import { chessGame } from './initGame'

function northWest (v) {
  let vector = {}
  vector.x = v.x + 1
  vector.y = v.y - 1
  return vector
}

function northEast (v) {
  let vector = {}
  vector.x = v.x + 1
  vector.y = v.y + 1
  return vector
}

function southEast (v) {
  let vector = {}
  vector.x = v.x - 1
  vector.y = v.y + 1
  return vector
}

function southWest (v) {
  let vector = {}
  vector.x = v.x - 1
  vector.y = v.y - 1
  return vector
}

function isBoard (v) {
  if (v.x >= 0 && v.x <= 7 && v.y >= 0 && v.y <= 7) {
    return true
  }
  return false
}

export function pawn (vector, board, ele) {
  let moves = []
  let mVector = { ...vector }
  let aVector = { ...vector }
  const player = chessGame.state.bottom
  const direction = ele.id.includes(player) ? 1 : -1
  let m = 0
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
      console.log(piece.id)
      board[mVector.x][mVector.y].classList.add('board__moves')
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
      aVector = a === 1 ? northWest(vector) : northEast(vector)
    }
    if (direction - 1) {
      enemy = 'wht'
      aVector = a === 1 ? southWest(vector) : southEast(vector)
    }

    if (isBoard(aVector)) {
      const piece = board[aVector.x][aVector.y].children[0]
      if (piece.id.includes(enemy)) {
        board[aVector.x][aVector.y].classList.add('board__attack')
        moves = [...moves, aVector]
      }
    }
    a++
  }

  return moves
}

function moves (space, board) {
  const piece = space.children[0]
  const values = space.id.split(',')
  const vector = { x: Number(values[0]), y: Number(values[1]) }
  let moves = null

  if (piece.id.includes('pawn')) {
    moves = pawn(vector, board, piece)
  }
  return moves
}

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
