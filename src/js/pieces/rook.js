import { chessGame } from '../initGame'

export function rook (vector, board, piece) {
  let moves = []
  const player = piece.id.split('-')[0]
  const direction = piece.id.includes(chessGame.state.bottom) ? 1 : -1
  const enemy = player === 'wht' ? 'blk' : 'wht'

  // north
  for (const nVector = { ...vector }; ;) {
    nVector.x += (1 * direction)
    if (!board[nVector.x]) break
    const piece = board[nVector.x][nVector.y].children[0]
    if (piece.id.includes(player)) {
      break
    }
    if (piece.id.includes(enemy)) {
      board[nVector.x][nVector.y].classList.add('board__attack')
      moves = [...moves, { ...nVector }]
      break
    }
    if (piece.id === 'empty') {
      board[nVector.x][nVector.y].classList.add('board__moves')
      moves = [...moves, { ...nVector }]
    }
  }

  // east
  for (const eVector = { ...vector }; ;) {
    eVector.y += (1 * direction)
    if (!board[eVector.x][eVector.y]) break
    const piece = board[eVector.x][eVector.y].children[0]
    if (piece.id.includes(player)) {
      break
    }
    if (piece.id.includes(enemy)) {
      board[eVector.x][eVector.y].classList.add('board__attack')
      moves = [...moves, { ...eVector }]
      break
    }
    if (piece.id === 'empty') {
      board[eVector.x][eVector.y].classList.add('board__moves')
      moves = [...moves, { ...eVector }]
    }
  }

  // south
  for (const sVector = { ...vector }; ;) {
    sVector.x -= (1 * direction)
    if (!board[sVector.x]) break
    const piece = board[sVector.x][sVector.y].children[0]
    if (piece.id.includes(player)) {
      break
    }
    if (piece.id.includes(enemy)) {
      board[sVector.x][sVector.y].classList.add('board__attack')
      moves = [...moves, { ...sVector }]
      break
    }
    if (piece.id === 'empty') {
      board[sVector.x][sVector.y].classList.add('board__moves')
      moves = [...moves, { ...sVector }]
    }
  }

  // west
  for (const wVector = { ...vector }; ;) {
    wVector.y -= (1 * direction)
    if (!board[wVector.x][wVector.y]) break
    const piece = board[wVector.x][wVector.y].children[0]
    if (piece.id.includes(player)) {
      break
    }
    if (piece.id.includes(enemy)) {
      board[wVector.x][wVector.y].classList.add('board__attack')
      moves = [...moves, { ...wVector }]
      break
    }
    if (piece.id === 'empty') {
      board[wVector.x][wVector.y].classList.add('board__moves')
      moves = [...moves, { ...wVector }]
    }
  }

  return moves
}

export default rook
