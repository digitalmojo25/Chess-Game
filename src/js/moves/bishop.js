// import chessGame from '../ChessGame'

export function bishop (vector, board, piece, type) {
  let moves = []
  const player = piece.id.split('-')[0]
  const enemy = player === 'wht' ? 'blk' : 'wht'

  function highlightSpace (space, type) {
    if (space.className.includes('white')) {
      space.classList.add(`board__${type}-wht`)
    } else {
      space.classList.add(`board__${type}-blk`)
    }
  }

  function getMoves (piece, space, vector) {
    switch (true) {
      case piece.id.includes(player) && type === undefined:
        return true
      case piece.id.includes(enemy):
        highlightSpace(space, 'attack')
        moves = [...moves, { ...vector }]
        return true
      case piece.id === 'empty':
        highlightSpace(space, 'moves')
        moves = [...moves, { ...vector }]
        return false
      default:
        if (type === 'covered') {
          moves = [...moves, { ...vector }]
        }
        return true
    }
  }

  function bishopMoves (vector) {
    // if vector is not on the board
    if (!board[vector.x] || !board[vector.x][vector.y]) return true
    const space = board[vector.x][vector.y]
    const piece = board[vector.x][vector.y].children[0]
    return getMoves(piece, space, vector)
  }

  // north east
  for (const neVector = { ...vector }; ;) {
    neVector.x += 1
    neVector.y += 1
    // if (!board[neVector.x] || !board[neVector.x][neVector.y]) break
    if (bishopMoves(neVector)) break
    // const piece = board[neVector.x][neVector.y].children[0]
    // if (piece.id.includes(player)) {
    //   break
    // }
    // if (piece.id.includes(enemy)) {
    //   if (board[neVector.x][neVector.y].className.includes('white')) {
    //     board[neVector.x][neVector.y].classList.add('board__attack-wht')
    //   }
    //   if (board[neVector.x][neVector.y].className.includes('black')) {
    //     board[neVector.x][neVector.y].classList.add('board__attack-blk')
    //   }
    //   moves = [...moves, { ...neVector }]
    //   break
    // }
    // if (piece.id === 'empty') {
    //   if (board[neVector.x][neVector.y].className.includes('white')) {
    //     board[neVector.x][neVector.y].classList.add('board__moves-wht')
    //   }
    //   if (board[neVector.x][neVector.y].className.includes('black')) {
    //     board[neVector.x][neVector.y].classList.add('board__moves-blk')
    //   }
    //   moves = [...moves, { ...neVector }]
    // }
  }

  // south east
  for (const seVector = { ...vector };;) {
    seVector.x -= 1
    seVector.y += 1
    // if (!board[seVector.x] || !board[seVector.x][seVector.y]) break
    if (bishopMoves(seVector)) break
    // const piece = board[seVector.x][seVector.y].children[0]
    // if (piece.id.includes(player)) {
    //   break
    // }
    // if (piece.id.includes(enemy)) {
    //   if (board[seVector.x][seVector.y].className.includes('white')) {
    //     board[seVector.x][seVector.y].classList.add('board__attack-wht')
    //   }
    //   if (board[seVector.x][seVector.y].className.includes('black')) {
    //     board[seVector.x][seVector.y].classList.add('board__attack-blk')
    //   }
    //   moves = [...moves, { ...seVector }]
    //   break
    // }
    // if (piece.id === 'empty') {
    //   if (board[seVector.x][seVector.y].className.includes('white')) {
    //     board[seVector.x][seVector.y].classList.add('board__moves-wht')
    //   }
    //   if (board[seVector.x][seVector.y].className.includes('black')) {
    //     board[seVector.x][seVector.y].classList.add('board__moves-blk')
    //   }
    //   moves = [...moves, { ...seVector }]
    // }
  }

  // south west
  for (const swVector = { ...vector }; ;) {
    swVector.x -= 1
    swVector.y -= 1
    // if (!board[swVector.x] || !board[swVector.x][swVector.y]) break
    if (bishopMoves(swVector)) break
    // const piece = board[swVector.x][swVector.y].children[0]
    // if (piece.id.includes(player)) {
    //   break
    // }
    // if (piece.id.includes(enemy)) {
    //   if (board[swVector.x][swVector.y].className.includes('white')) {
    //     board[swVector.x][swVector.y].classList.add('board__attack-wht')
    //   }
    //   if (board[swVector.x][swVector.y].className.includes('black')) {
    //     board[swVector.x][swVector.y].classList.add('board__attack-blk')
    //   }
    //   moves = [...moves, { ...swVector }]
    //   break
    // }
    // if (piece.id === 'empty') {
    //   if (board[swVector.x][swVector.y].className.includes('white')) {
    //     board[swVector.x][swVector.y].classList.add('board__moves-wht')
    //   }
    //   if (board[swVector.x][swVector.y].className.includes('black')) {
    //     board[swVector.x][swVector.y].classList.add('board__moves-blk')
    //   }
    //   moves = [...moves, { ...swVector }]
    // }
  }

  // north west
  for (const nwVector = { ...vector }; ;) {
    nwVector.x += 1
    nwVector.y -= 1

    // if vector is not on the board (undefined)
    // if (!board[nwVector.x] || !board[nwVector.x][nwVector.y]) break
    if (bishopMoves(nwVector)) break
    // const piece = board[nwVector.x][nwVector.y].children[0]
    // // if vector is own side
    // console.log(type)
    // if (piece.id.includes(player) && type === undefined) {
    //   break
    // }
    // if (piece.id.includes(enemy)) {
    //   if (board[nwVector.x][nwVector.y].className.includes('white')) {
    //     board[nwVector.x][nwVector.y].classList.add('board__attack-wht')
    //   }
    //   if (board[nwVector.x][nwVector.y].className.includes('black')) {
    //     board[nwVector.x][nwVector.y].classList.add('board__attack-blk')
    //   }
    //   moves = [...moves, { ...nwVector }]
    //   break
    // }
    // if (piece.id === 'empty') {
    //   if (board[nwVector.x][nwVector.y].className.includes('white')) {
    //     board[nwVector.x][nwVector.y].classList.add('board__moves-wht')
    //   }
    //   if (board[nwVector.x][nwVector.y].className.includes('black')) {
    //     board[nwVector.x][nwVector.y].classList.add('board__moves-blk')
    //   }
    //   moves = [...moves, { ...nwVector }]
    // }
    // if (piece.id.includes(player) && type === 'covered') {
    //   moves = [...moves, { ...nwVector }]
    // }
  }
  return moves
}

export default bishop
