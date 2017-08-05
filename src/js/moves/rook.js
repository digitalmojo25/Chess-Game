import chessGame from '../ChessGame'

export function rook (vector, board, piece, eMoves) {
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
      if (eMoves && board[nVector.x][nVector.y].className.includes('white')) {
        board[nVector.x][nVector.y].classList.add('board__attack-wht')
      }
      if (eMoves && board[nVector.x][nVector.y].className.includes('black')) {
        board[nVector.x][nVector.y].classList.add('board__attack-blk')
      }
      moves = [...moves, { ...nVector }]
      break
    }
    if (piece.id === 'empty') {
      if (eMoves && board[nVector.x][nVector.y].className.includes('white')) {
        board[nVector.x][nVector.y].classList.add('board__moves-wht')
      }
      if (eMoves && board[nVector.x][nVector.y].className.includes('black')) {
        board[nVector.x][nVector.y].classList.add('board__moves-blk')
      }
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
      if (eMoves && board[eVector.x][eVector.y].className.includes('white')) {
        board[eVector.x][eVector.y].classList.add('board__attack-wht')
      }
      if (eMoves && board[eVector.x][eVector.y].className.includes('black')) {
        board[eVector.x][eVector.y].classList.add('board__attack-blk')
      }
      moves = [...moves, { ...eVector }]
      break
    }
    if (piece.id === 'empty') {
      if (eMoves && board[eVector.x][eVector.y].className.includes('white')) {
        board[eVector.x][eVector.y].classList.add('board__moves-wht')
      }
      if (eMoves && board[eVector.x][eVector.y].className.includes('black')) {
        board[eVector.x][eVector.y].classList.add('board__moves-blk')
      }
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
      if (eMoves && board[sVector.x][sVector.y].className.includes('white')) {
        board[sVector.x][sVector.y].classList.add('board__attack-wht')
      }
      if (eMoves && board[sVector.x][sVector.y].className.includes('black')) {
        board[sVector.x][sVector.y].classList.add('board__attack-blk')
      }
      moves = [...moves, { ...sVector }]
      break
    }
    if (piece.id === 'empty') {
      if (eMoves && board[sVector.x][sVector.y].className.includes('white')) {
        board[sVector.x][sVector.y].classList.add('board__moves-wht')
      }
      if (eMoves && board[sVector.x][sVector.y].className.includes('black')) {
        board[sVector.x][sVector.y].classList.add('board__moves-blk')
      }
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
      if (eMoves && board[wVector.x][wVector.y].className.includes('white')) {
        board[wVector.x][wVector.y].classList.add('board__attack-wht')
      }
      if (eMoves && board[wVector.x][wVector.y].className.includes('black')) {
        board[wVector.x][wVector.y].classList.add('board__attack-blk')
      }
      moves = [...moves, { ...wVector }]
      break
    }
    if (piece.id === 'empty') {
      if (eMoves && board[wVector.x][wVector.y].className.includes('white')) {
        board[wVector.x][wVector.y].classList.add('board__moves-wht')
      }
      if (eMoves && board[wVector.x][wVector.y].className.includes('black')) {
        board[wVector.x][wVector.y].classList.add('board__moves-blk')
      }
      moves = [...moves, { ...wVector }]
    }
  }

  return moves
}

export default rook
