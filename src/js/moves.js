
export function pawn (vector, board, ele) {
  // debugger;
  const moves = []
  const direction = ele.id.includes('wht') ? 1 : -1
  let i = 0
  while (i < 2) {
    vector.x += direction
    board[vector.x][vector.y].classList.add('board__moves')
    moves.push(vector)
    i++
  }
  return moves
}

function moves (space, board) {
  // console.log(space)
  const ele = space.children[0]
  const values = space.id.split(',')
  const vector = { x: Number(values[0]), y: Number(values[1]) }
  let moves = null

  // clear style
  board.forEach((row, x) => {
    row.forEach((space, y) => {
      board[x][y].classList.remove('board__moves')
    })
  })

  if (ele.id.includes('pawn')) {
    // console.log(space.children[0], vector)
    moves = pawn(vector, board, ele)
  }
  return moves
}

export default moves
