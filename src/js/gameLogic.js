import { chessGame } from './initGame'
import moves, { validate } from './moves'
// import * as moves from './moves'

function gameLogic (space) {
  // debugger
  const board = chessGame.board
  const movePiece = chessGame.pSpace ? board[chessGame.pSpace.x][chessGame.pSpace.y] : null
  const s = space.id.split(',')
  const vector = { x: Number(s[0]), y: Number(s[1]) }
  // let blkPiece = null
  const sPieceId = space.children[0].id.split('-')[0]
  // const piece = space.children[0]
  // debugger

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
          chessGame.setPiece(vector, movePiece.children[0])
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
          chessGame.setPiece(vector, movePiece.children[0])
        }
        return
      case 'blk':
        // debugger
        chessGame.pSpace = vector
        chessGame.setSpace(vector)
        chessGame.moves = moves(chessGame.space, chessGame.board)        
        return
      case 'wht': {
        if (!chessGame.pSpace) return
        const isMove = validate(vector, chessGame.moves)
        if (isMove) {
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
