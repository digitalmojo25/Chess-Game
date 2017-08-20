import chessGame from './ChessGame'
import moves, { validate } from './moves'
import enemyMoves from './moves/enemyMoves'
import attackPiece from './utils/attackPiece'

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

  // function checkmate () {
  //   // cMoves.forEach((m) => {
  //   // if (board[m.x][m.y].children[0].id.includes('blk-king')) {
  //   // console.log('BLACK KING IS IN CHECK!')
  //   // check to see if king can move
  //   kingMoves = moves(board[m.x][m.y], board).filter((m) => {
  //     return !cMovesStr.includes(JSON.stringify(m))
  //   })
  //   if (kingMoves.length > 0) {
  //     checkMessage = 'BLACK KING IS IN CHECK!'
  //     return
  //   }

  //   // if king has no moves check if checking piece can be taken
  //   console.log('BLACK KING HAS NO MOVES!')
  //   // check if checking piece can be taken on next move
  //   if (attackPiece('wht', vector)) return

  //   // if checking piece can not be taken, check if checked
  //   // players pieces can move to block block check
  //   const eMoves = enemyMoves(board, 'wht')
  //   eMoves.forEach((e, i) => {
  //     // fill the border with all of checked players possible moves
  //     if (board[e.x][e.y].children[0].id === 'empty') {
  //       board[e.x][e.y].innerHTML = `<div id="blk-enemy-move-${i}" class="chess-piece">EM</div>`
  //     }
  //   })
  //   // get attacking pieces moves
  //   const checkMoves = moves(board[vector.x][vector.y], board)
  //   // king is in checkMoves the player has been checkmated
  //   checkMoves.forEach((c) => {
  //     if (board[c.x][c.y].children[0].id.includes('king')) {
  //       console.log('BLACK KING IS IN CHECKMATE!')
  //     }
  //   })
  //   eMoves.forEach((e, i) => {
  //     if (board[e.x][e.y].children[0].id.includes('enemy-move')) {
  //       board[e.x][e.y].innerHTML = `<div id="empty" class="chess-piece"></div>`
  //     }
  //   })

  //   // debugger
  //   // }
  //   // })
  // }

  if (chessGame.state.turn === 'wht') {
    switch (sPieceId) {
      case 'blk':
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

          // was king put in check by a piece which wasn't moved?
          // find the vector for the black king
          let king = null
          let checkMessage = ''
          let kingMoves = []
          board.forEach((row, x) => {
            row.forEach((space, y) => {
              if (board[x][y].children[0].id === 'blk-king') {
                king = { x, y }
              }
            })
          })

          const attacker = attackPiece('wht', king)
          if (attacker) {
            console.log('BLACK KING IS IN CHECK!')
            kingMoves = moves(board[king.x][king.y], board)
            if (kingMoves.length > 0) {
              checkMessage = 'BLACK KING IS IN CHECK!'
              return
            }

            // if king has no moves check if checking piece can be taken
            console.log('BLACK KING HAS NO MOVES!')
            // check if checking piece can be taken on next move
            if (attackPiece('wht', vector)) return

            // if checking piece can not be taken, check if checked
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
        chessGame.setSpace(vector)
        chessGame.pSpace = vector
        chessGame.moves = moves(chessGame.space, chessGame.board)
        return
        // case 'blk': {
        //   // white attacks black
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
  if (chessGame.state.turn === 'blk') {
    switch (sPieceId) {
      case 'wht':
      case 'empty': {
        if (!chessGame.pSpace) return
        const isMove = validate(vector, chessGame.moves)
        // move piece to new spot on the board
        if (isMove) {
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
            if (kingMoves.length > 0) {
              checkMessage = 'WHITE KING IS IN CHECK!'
              return
            }

            // if king has no moves check if checking piece can be taken
            console.log('WHITE KING HAS NO MOVES!')
            // check if checking piece can be taken on next move
            if (attackPiece('blk', vector)) return

            // if checking piece can not be taken, check if checked
            // players pieces can move to block block check
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
