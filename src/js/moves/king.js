import chessGame from '../ChessGame'
// import * as eMoves from './index'
// import * as blk from '../blackPieces'
// import * as wht from '../whitePieces'

export function king (vector, board, piece, eMoves) {
  // debugger
  let enemyMoves = []
  if (typeof eMoves !== 'boolean') {
    enemyMoves = eMoves.map(m => JSON.stringify(m))
  }
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
    break
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
      if (eMoves && board[neVector.x][neVector.y].className.includes('white')) {
        board[neVector.x][neVector.y].classList.add('board__attack-wht')
      }
      if (eMoves && board[neVector.x][neVector.y].className.includes('black'))  {
        board[neVector.x][neVector.y].classList.add('board__attack-blk')
      }
      moves = [...moves, { ...neVector }]
      break
    }
    if (piece.id === 'empty') {
      if (eMoves && board[neVector.x][neVector.y].className.includes('white')) {
        board[neVector.x][neVector.y].classList.add('board__moves-wht')
      }
      if (eMoves && board[neVector.x][neVector.y].className.includes('black')) {
        board[neVector.x][neVector.y].classList.add('board__moves-blk')
      }
      moves = [...moves, { ...neVector }]
    }
    break
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
    break
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
      if (eMoves && board[seVector.x][seVector.y].className.includes('white')) {
        board[seVector.x][seVector.y].classList.add('board__attack-wht')
      }
      if (eMoves && board[seVector.x][seVector.y].className.includes('black')) {
        board[seVector.x][seVector.y].classList.add('board__attack-blk')
      }
      moves = [...moves, { ...seVector }]
      break
    }
    if (piece.id === 'empty') {
      if (eMoves && board[seVector.x][seVector.y].className.includes('white')) {
        board[seVector.x][seVector.y].classList.add('board__moves-wht')
      }
      if (eMoves && board[seVector.x][seVector.y].className.includes('black')) {
        board[seVector.x][seVector.y].classList.add('board__moves-blk')
      }
      moves = [...moves, { ...seVector }]
    }
    break
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
    break
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
      if (eMoves && board[swVector.x][swVector.y].className.includes('white')) {
        board[swVector.x][swVector.y].classList.add('board__attack-wht')
      }
      if (eMoves && board[swVector.x][swVector.y].className.includes('black')) {
        board[swVector.x][swVector.y].classList.add('board__attack-blk')
      }
      moves = [...moves, { ...swVector }]
      break
    }
    if (piece.id === 'empty') {
      if (eMoves && board[swVector.x][swVector.y].className.includes('white')) {
        board[swVector.x][swVector.y].classList.add('board__moves-wht')
      }
      if (eMoves && board[swVector.x][swVector.y].className.includes('black')) {
        board[swVector.x][swVector.y].classList.add('board__moves-blk')
      }
      moves = [...moves, { ...swVector }]
    }
    break
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
    break
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
      if (eMoves && board[nwVector.x][nwVector.y].className.includes('white')) {
        board[nwVector.x][nwVector.y].classList.add('board__attack-wht')
      }
      if (eMoves && board[nwVector.x][nwVector.y].className.includes('black')) {
        board[nwVector.x][nwVector.y].classList.add('board__attack-blk')
      }
      moves = [...moves, { ...nwVector }]
      break
    }
    if (piece.id === 'empty') {
      if (eMoves && board[nwVector.x][nwVector.y].className.includes('white')) {
        board[nwVector.x][nwVector.y].classList.add('board__moves-wht')
      }
      if (eMoves && board[nwVector.x][nwVector.y].className.includes('black')) {
        board[nwVector.x][nwVector.y].classList.add('board__moves-blk')
      }
      moves = [...moves, { ...nwVector }]
    }
    break
  }
  return moves.filter((m) => {
    const move = { ...m }
    if (enemyMoves.includes(JSON.stringify(move))) {
      board[move.x][move.y].classList.remove('board__moves-wht')
      board[move.x][move.y].classList.remove('board__moves-blk')
      board[move.x][move.y].classList.remove('board__attack-wht')
      board[move.x][move.y].classList.remove('board__attack-blk')
      return false
    }
    return true
  })
}

// console.log(king)
// debugger

export default king
