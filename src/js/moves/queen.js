import chessGame from '../ChessGame'

export function queen (vector, board, piece) {
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
  // south east
  for (const seVector = { ...vector }; ;) {
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

export default queen
