import chessGame from './ChessGame'
import moves, { validate } from './moves'
import enemyMoves from './moves/enemyMoves'
import attackPiece from './utils/attackPiece'
import coveredPiece from './utils/coveredPiece'

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

  function kingVector (color) {
    let vector = null
    board.forEach((row, x) => {
      row.forEach((space, y) => {
        if (board[x][y].children[0].id === `${color}-king`) {
          vector = { x, y }
        }
      })
    })
    return vector
  }

  if (chessGame.state.turn === 'wht') {
    switch (sPieceId) {
      case 'blk':
      case 'empty': {
        // if player doesn't start by select one one their pieces
        // pSpace(previous space) will not be populated
        if (!chessGame.pSpace) return
        const isMove = validate(vector, chessGame.moves)

        // is white king in check?
        // temporarily move piece
        chessGame.tempSetPiece(chessGame.pSpace, vector)
        const king = kingVector('wht')
        const kingInCheck = attackPiece('blk', king)
        chessGame.tempSetPiece(vector, chessGame.pSpace)
        // debugger

        // move piece to new spot on the board
        if (isMove && !kingInCheck) {
          countDown.innerHTML = '24:00:00'
          chessGame.startTimer(countDown.innerHTML.split(':'))
          chessGame.setPiece(vector, movePiece.children[0])

          // was king put in check by a piece which wasn't moved?
          // find the vector for the black king
          const king = kingVector('blk')
          let checkMessage = ''
          let kingMoves = []

          const attacker = attackPiece('wht', king)
          if (attacker) {
            // debugger
            console.log('BLACK KING IS IN CHECK!')
            kingMoves = moves(board[king.x][king.y], board)
            // remove protect pieces from kingMoves
            kingMoves = kingMoves.filter((m) => {
              let enemyCovered = false
              if (board[m.x][m.y].children[0].id.includes('wht')) {
                enemyCovered = !!coveredPiece('wht', m)
              }
              return !enemyCovered
            })
            if (kingMoves.length > 0) {
              checkMessage = 'BLACK KING IS IN CHECK!'
              return
            }

            // if king has no moves check if checking piece can be taken
            console.log('BLACK KING HAS NO MOVES!')
            // check if checking piece can be taken on next move
            if (attackPiece('wht', vector)) return

            // if checking piece can not be taken... check if checked
            // players pieces can move to block block check
            const eMoves = enemyMoves(board, 'wht')
            eMoves.forEach((e, i) => {
              // fill the border with all of checked players possible moves
              if (board[e.x][e.y].children[0].id === 'empty') {
                board[e.x][e.y].innerHTML = `<div id="blk-enemy-move-${i}" class="chess-piece">EM</div>`
              }
            })
            // get attacking pieces moves
            const checkMoves = moves(board[vector.x][vector.y], board)
            // king is in checkMoves the player has been checkmated
            checkMoves.forEach((c) => {
              if (board[c.x][c.y].children[0].id.includes('king')) {
                console.log('BLACK KING IS IN CHECKMATE!')
              }
            })
            // remove EM's from the board
            eMoves.forEach((e, i) => {
              if (board[e.x][e.y].children[0].id.includes('enemy-move')) {
                board[e.x][e.y].innerHTML = `<div id="empty" class="chess-piece"></div>`
              }
            })
          } else {
            console.log('Black king is not in check')
          }
        }
        return
      }
      case 'wht':
        // white tries to move onto another white space
        // highlight space on board
        chessGame.setSpace(vector)
        // set previous space
        chessGame.pSpace = vector
        // set possible moves for selected piece
        chessGame.moves = moves(chessGame.space, chessGame.board)
        return
      default:
        break
    }
  }
  if (chessGame.state.turn === 'blk') {
    switch (sPieceId) {
      case 'wht':
      case 'empty': {
        if (!chessGame.pSpace) return
        const isMove = validate(vector, chessGame.moves)

        // is white king in check?
        // temporarily move piece
        chessGame.tempSetPiece(chessGame.pSpace, vector)
        const king = kingVector('blk')
        const kingInCheck = attackPiece('wht', king)
        chessGame.tempSetPiece(vector, chessGame.pSpace)

        // move piece to new spot on the board
        if (isMove && !kingInCheck) {
          countDown.innerHTML = '24:00:00'
          chessGame.startTimer(countDown.innerHTML.split(':'))
          chessGame.setPiece(vector, movePiece.children[0])

          // was king put in check by a piece which wasn't moved?
          // find the vector for the black king
          let king = null
          let checkMessage = ''
          let kingMoves = []
          board.forEach((row, x) => {
            row.forEach((space, y) => {
              if (board[x][y].children[0].id === 'wht-king') {
                king = { x, y }
              }
            })
          })

          const attacker = attackPiece('blk', king)
          if (attacker) {
            console.log('WHITE KING IS IN CHECK!')
            kingMoves = moves(board[king.x][king.y], board)

            // remove protect pieces from kingMoves
            kingMoves = kingMoves.filter((m) => {
              let enemyCovered = false
              if (board[m.x][m.y].children[0].id.includes('blk')) {
                enemyCovered = !!coveredPiece('blk', m)
              }
              return !enemyCovered
            })

            if (kingMoves.length > 0) {
              checkMessage = 'WHITE KING IS IN CHECK!'
              return
            }

            // if king has no moves check if checking piece can be taken
            console.log('WHITE KING HAS NO MOVES!')
            // check if checking piece can be taken on next move
            if (attackPiece('blk', vector)) return

            // if checking piece can not be taken, check if checked
            // players pieces can move to block check
            const eMoves = enemyMoves(board, 'blk')
            eMoves.forEach((e, i) => {
              // fill the border with all of checked players possible moves
              if (board[e.x][e.y].children[0].id === 'empty') {
                board[e.x][e.y].innerHTML = `<div id="blk-enemy-move-${i}" class="chess-piece">EM</div>`
              }
            })
            // get attacking pieces moves
            const checkMoves = moves(board[vector.x][vector.y], board)
            // king is in checkMoves the player has been checkmated
            checkMoves.forEach((c) => {
              if (board[c.x][c.y].children[0].id.includes('king')) {
                console.log('WHITE KING IS IN CHECKMATE!')
              }
            })
            eMoves.forEach((e, i) => {
              if (board[e.x][e.y].children[0].id.includes('enemy-move')) {
                board[e.x][e.y].innerHTML = `<div id="empty" class="chess-piece"></div>`
              }
            })
          } else {
            console.log('white king is not in check')
          }
        }
        return
      }
      case 'blk':
        chessGame.pSpace = vector
        chessGame.setSpace(vector)
        chessGame.moves = moves(chessGame.space, chessGame.board)     
        break
        // return
      // case 'wht': {
      //   if (!chessGame.pSpace) return
      //   const isMove = validate(vector, chessGame.moves)
      //   if (isMove) {
      //     countDown.innerHTML = '24:00:00'
      //     chessGame.startTimer(countDown.innerHTML.split(':'))
      //     chessGame.setPiece(vector, movePiece.children[0])
      //   }
      //   return
      // }
      default:
        break
    }
  }
}

export default gameLogic
