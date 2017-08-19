function initBoard () {
  const chessBoard = document.getElementById('chess-board')
  const board = document.createElement('div')
  const numCords = document.getElementById('numbers')
  const letterCords = document.getElementById('letters')

  board.className = 'board'
  let row = null
  let rowNum = 0
  let cord = null

  // build number cords div element
  for (let i = 0; i > -8; i--) {
    cord = document.createElement('div')
    cord.className = 'numbers__coordinate'
    cord.innerText = i + 8
    // numCords.appendChild(cord)
  }

  // build letter codes dev element
  for (let i = 0; i < 8; i++) {
    cord = document.createElement('div')
    cord.className = 'letters__coordinate'
    switch (i + 1) {
      case 1:
        cord.innerText = 'A'
        break
      case 2:
        cord.innerText = 'B'
        break
      case 3:
        cord.innerText = 'C'
        break
      case 4:
        cord.innerText = 'D'
        break
      case 5:
        cord.innerText = 'E'
        break
      case 6:
        cord.innerText = 'F'
        break
      case 7:
        cord.innerText = 'G'
        break
      case 8:
        cord.innerText = 'H'
        break
      default:
        break
    }
    // letterCords.appendChild(cord)
  }

  // build the chess board
  for (let i = 0; i < 64; i++) {
    const space = document.createElement('div')
    if (i % 8 === 0) {
      row = document.createElement('div')
      row.className = 'board__row'
      rowNum += 1
    }
    if (i % 2 === 0) {
      space.className = rowNum % 2 === 0 ? 'board__white-space' : 'board__black-space'
    } else {
      space.className = rowNum % 2 === 0 ? 'board__black-space' : 'board__white-space'
    }
    row.appendChild(space)
    board.appendChild(row)
  }
  chessBoard.appendChild(board)
}

initBoard()

export default initBoard
