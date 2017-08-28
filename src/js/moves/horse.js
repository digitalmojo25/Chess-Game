export function horse (vector, board, piece, type) {
  let moves = []
  const player = piece.id.split('-')[0]
  const enemy = player === 'wht' ? 'blk' : 'wht'

  function highLightSpace (space, type) {
    if (space.className.includes('white')) {
      space.classList.add(`board__${type}-wht`)
    } else {
      space.classList.add(`board__${type}-blk`)
    }
  }

  function getMoves (piece, space, vector) {
    switch (true) {
      case piece.id === 'empty':
        highLightSpace(space, 'moves')
        moves = [...moves, { ...vector }]
        break
      case piece.id.includes(enemy):
        highLightSpace(space, 'attack')
        moves = [...moves, { ...vector }]
        break
      default:
        if (type === 'covered') {
          moves = [...moves, { ...vector }]
        }
        break
    }
  }

  function horseMoves (vector) {
    // if vector is not on the board
    if (!board[vector.x] || !board[vector.x][vector.y]) return
    const space = board[vector.x][vector.y]
    const piece = board[vector.x][vector.y].children[0]
    getMoves(piece, space, vector)
  }

  // north
  for (var n = 0; n < 2; n++) {
    const nVector = { ...vector }
    nVector.x += 2
    nVector.y += n === 0 ? -1 : 1
    horseMoves(nVector)
  }

  // east
  for (var e = 0; e < 2; e++) {
    const eVector = { ...vector }
    eVector.x += e === 0 ? -1 : 1
    eVector.y += 2
    horseMoves(eVector)
  }

  // south
  for (var s = 0; s < 2; s++) {
    const sVector = { ...vector }
    sVector.x -= 2
    sVector.y += s === 0 ? -1 : 1
    horseMoves(sVector)
  }

  // west
  for (var w = 0; w < 2; w++) {
    const wVector = { ...vector }
    wVector.x += w === 0 ? -1 : 1
    wVector.y -= 2
    horseMoves(wVector)
  }
  return moves
}

export default horse
