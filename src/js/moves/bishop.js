import { chessGame } from '../initGame'

export function bishop (vector, board, piece) {
  let moves = []
  const player = piece.id.split('-')[0]
  const direction = piece.id.includes(chessGame.state.bottom) ? 1 : -1
  const enemy = player === 'wht' ? 'blk' : 'wht'

  // north east
  for (const neVector = { ...vector }; ;) {
    neVector.x += (1 * direction)
    neVector.y += (1 * direction)
    if (!board[neVector.x] || !board[neVector.x][neVector.y]) break
    const piece = board[neVector.x][neVector.y].children[0]
    if (piece.id.includes(player)) {
      break
    }
    if (piece.id.includes(enemy)) {
      board[neVector.x][neVector.y].classList.add('board__attack')
      moves = [...moves, { ...neVector }]
      break
    }
    if (piece.id === 'empty') {
      board[neVector.x][neVector.y].classList.add('board__moves')
      moves = [...moves, { ...neVector }]
    }
  }

  // south east
  for (const seVector = { ...vector };;) {
    seVector.x -= (1 * direction)
    seVector.y += (1 * direction)
    if (!board[seVector.x] || !board[seVector.x][seVector.y]) break
    const piece = board[seVector.x][seVector.y].children[0]
    if (piece.id.includes(player)) {
      break
    }
    if (piece.id.includes(enemy)) {
      board[seVector.x][seVector.y].classList.add('board__attack')
      moves = [...moves, { ...seVector }]
      break
    }
    if (piece.id === 'empty') {
      board[seVector.x][seVector.y].classList.add('board__moves')
      moves = [...moves, { ...seVector }]
    }
  }

  // south west
  for (const swVector = { ...vector }; ;) {
    swVector.x -= (1 * direction)
    swVector.y -= (1 * direction)
    if (!board[swVector.x] || !board[swVector.x][swVector.y]) break
    const piece = board[swVector.x][swVector.y].children[0]
    if (piece.id.includes(player)) {
      break
    }
    if (piece.id.includes(enemy)) {
      board[swVector.x][swVector.y].classList.add('board__attack')
      moves = [...moves, { ...swVector }]
      break
    }
    if (piece.id === 'empty') {
      board[swVector.x][swVector.y].classList.add('board__moves')
      moves = [...moves, { ...swVector }]
    }
  }

  // north west
  for (const nwVector = { ...vector }; ;) {
    nwVector.x += (1 * direction)
    nwVector.y -= (1 * direction)
    if (!board[nwVector.x] || !board[nwVector.x][nwVector.y]) break
    const piece = board[nwVector.x][nwVector.y].children[0]
    if (piece.id.includes(player)) {
      break
    }
    if (piece.id.includes(enemy)) {
      board[nwVector.x][nwVector.y].classList.add('board__attack')
      moves = [...moves, { ...nwVector }]
      break
    }
    if (piece.id === 'empty') {
      board[nwVector.x][nwVector.y].classList.add('board__moves')
      moves = [...moves, { ...nwVector }]
    }
  }
  return moves
}

export default bishop
