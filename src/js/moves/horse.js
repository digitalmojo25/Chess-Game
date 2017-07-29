import chessGame from '../ChessGame'

export function horse (vector, board, piece) {
  let moves = []
  const player = piece.id.split('-')[0]
  // const direction = piece.id.includes(chessGame.state.bottom) ? 1 : -1
  const enemy = player === 'wht' ? 'blk' : 'wht'
  // north
  for (var n = 0; n < 2; n++) {
    const nVector = { ...vector }
    nVector.x += 2
    nVector.y += n === 0 ? -1 : 1
    if (board[nVector.x] && board[nVector.x][nVector.y]) {
      const piece = board[nVector.x][nVector.y].children[0]
      if (piece.id === 'empty') {
        board[nVector.x][nVector.y].classList.add('board__moves')
        moves = [...moves, { ...nVector }]
      }
      if (piece.id.includes(enemy)) {
        board[nVector.x][nVector.y].classList.add('board__attack')
        moves = [...moves, { ...nVector }]
      }
    }
  }
  
  // east
  for (var e = 0; e < 2; e++) {
    const eVector = { ...vector }
    eVector.x += e === 0 ? -1 : 1
    eVector.y += 2
    if (board[eVector.x] && board[eVector.x][eVector.y]) {
      const piece = board[eVector.x][eVector.y].children[0]
      if (piece.id === 'empty') {
        board[eVector.x][eVector.y].classList.add('board__moves')
        moves = [...moves, { ...eVector }]
      }
      if (piece.id.includes(enemy)) {
        board[eVector.x][eVector.y].classList.add('board__attack')
        moves = [...moves, { ...eVector }]
      }
    }
  }

  // south
  for (var s = 0; s < 2; s++) {
    const sVector = { ...vector }
    sVector.x -= 2
    sVector.y += s === 0 ? -1 : 1
    if (board[sVector.x] && board[sVector.x][sVector.y]) {
      const piece = board[sVector.x][sVector.y].children[0]
      if (piece.id === 'empty') {
        board[sVector.x][sVector.y].classList.add('board__moves')
        moves = [...moves, { ...sVector }]
      }
      if (piece.id.includes(enemy)) {
        board[sVector.x][sVector.y].classList.add('board__attack')
        moves = [...moves, { ...sVector }]
      }
    }
  }

  // west
  for (var w = 0; w < 2; w++) {
    const wVector = { ...vector }
    wVector.x += w === 0 ? -1 : 1
    wVector.y -= 2
    if (board[wVector.x] && board[wVector.x][wVector.y]) {
      const piece = board[wVector.x][wVector.y].children[0]
      if (piece.id === 'empty') {
        board[wVector.x][wVector.y].classList.add('board__moves')
        moves = [...moves, { ...wVector }]
      }
      if (piece.id.includes(enemy)) {
        board[wVector.x][wVector.y].classList.add('board__attack')
        moves = [...moves, { ...wVector }]
      }
    }
  }
  return moves
}

export default horse
