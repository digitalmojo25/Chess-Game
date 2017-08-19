import chessGame from './ChessGame'
import moves, { validate } from './moves'
import enemyMoves from './moves/enemyMoves'

function gameLogic (space) {
  const board = chessGame.board
  const countDown = document.getElementById('count-down')
  const movePiece = chessGame.pSpace ? board[chessGame.pSpace.x][chessGame.pSpace.y] : null
  const s = space.id.split(',')
  const vector = { x: Number(s[0]), y: Number(s[1]) }
  const sPieceId = space.children[0].id.split('-')[0]

  // is the next selection an open space or one occupied by an
  // enemy piece? chess pieces not move through another piece
  // and can only move into an open spot or an enemy

  if (chessGame.state.turn === 'wht') {
    switch (sPieceId) {
      case 'empty': {
        // if player doesn't start by select one one his pieces
        // pSpace(previous space) will not be populated
        if (!chessGame.pSpace) return
        const isMove = validate(vector, chessGame.moves)
        // move piece to new spot on the board
        if (isMove) {
          countDown.innerHTML = '24:00:00'
          chessGame.startTimer(countDown.innerHTML.split(':'))
          chessGame.setPiece(vector, movePiece.children[0])
          // TODO: add check and checkmate
          // look for check && set moves on the board for the last moved piece
          const cMoves = moves(board[vector.x][vector.y], board)
          // const currentMove = board[vector.x][vector.y]
          cMoves.forEach((m) => {
            let check = false
            let kingMoves = []
            if (board[m.x][m.y].children[0].id.includes('blk-king')) {
              console.log('black king is in check')
              kingMoves = moves(board[m.x][m.y], board)
              check = true
            }
            // check if king has moves
            // if (check) {
            // }
            // check if pieces can block
            if (check && kingMoves.length === 0) {
              console.log('black king has no moves')
              // check to see if attacking piece is with the enemy moves... or can be killed
              // get all black moves and remove them from the attacking pieces possible moves
              // check again if king is still in check if so its checkmate
              // TODO: only add pawn attacking moves and remove pawn moves
              const eMoves = enemyMoves(board, 'wht')
              let found = false
              eMoves.forEach((m) => {
                if (m.x === vector.x && m.y === vector.y) {
                  found = true
                }
              })
              if (found) {
                console.log('white attacking piece can be taken by black')
                return
              }
              // TODO: only add pawn moves and remove pawn attacking moves
              // console.log(cMoves, eMoves)
              // remove king
              // const notBlocked = cMoves.filter((c) => {
              //   let found = false
              //   eMoves.forEach((e) => {
              //     if (c.x === e.x && c.y === e.y) {
              //       found = true
              //     }
              //   })
              //   return !found
              // })
              // TODO: fill board with stand in enemy piece
              // and run moves for attacking piece
              // const checkBoard = [...board]
              eMoves.forEach((e, i) => {
                // const enemyPiece = document.createElement('div')
                if (board[e.x][e.y].children[0].id === 'empty') {
                  board[e.x][e.y].innerHTML = `<div id="blk-enemy-move-${i}" class="chess-piece">EM</div>`
                }
              })
              const checkMoves = moves(board[vector.x][vector.y], board)
              checkMoves.forEach((c) => {
                if (board[c.x][c.y].children[0].id.includes('king')) {
                  console.log('black in is checkmate')
                }
              })
              eMoves.forEach((e, i) => {
                // const empty = document.createElement('div')
                // empty.classList.add('chess-piece')
                // empty.setAttribute('id', 'empty')
                if (board[e.x][e.y].children[0].includes('enemy-move')) {
                  board[e.x][e.y].innerHTML = `<div id="empty" class="chess-piece"></div>`
                }
              })
              // console.log(checkMoves)
              // debugger
            }
          })
        }
        return
      }
      case 'wht':
        chessGame.setSpace(vector)
        chessGame.pSpace = vector
        chessGame.moves = moves(chessGame.space, chessGame.board)
        return
      case 'blk': {
        if (!chessGame.pSpace) return
        const isMove = validate(vector, chessGame.moves)
        if (isMove) {
          countDown.innerHTML = '24:00:00'
          chessGame.startTimer(countDown.innerHTML.split(':'))
          chessGame.setPiece(vector, movePiece.children[0])
        }
        return
      }
      default:
        break
    }
  }
  if (chessGame.state.turn === 'blk') {
    switch (sPieceId) {
      case 'empty':
        if (!chessGame.pSpace) return
        const isMove = validate(vector, chessGame.moves)
        // move piece to new spot on the board
        if (isMove) {
          countDown.innerHTML = '24:00:00'
          chessGame.startTimer(countDown.innerHTML.split(':'))
          chessGame.setPiece(vector, movePiece.children[0])
        }

        // look for check
        const cMoves = moves(board[vector.x][vector.y], board)

        return
      case 'blk':
        chessGame.pSpace = vector
        chessGame.setSpace(vector)
        chessGame.moves = moves(chessGame.space, chessGame.board)     
        return
      case 'wht': {
        if (!chessGame.pSpace) return
        const isMove = validate(vector, chessGame.moves)
        if (isMove) {
          countDown.innerHTML = '24:00:00'
          chessGame.startTimer(countDown.innerHTML.split(':'))
          chessGame.setPiece(vector, movePiece.children[0])
        }
        return
      }
      default:
        break
    }
  }
}

export default gameLogic
