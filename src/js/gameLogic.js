import { chessGame } from './initGame'

function gameLogic (space) {
  // debugger
  const s = space.id.split(',')
  const vector = { x: Number(s[0]), y: Number(s[1]) }
  let blkPiece = null
  const sPieceId = space.children[0].id.split('-')[0]
  // const piece = space.children[0]
  // debugger

  // is the next selection an open space or one occupied by an
  // enemy piece? chess pieces not move through another piece
  // and can only move into an open spot or an enemy

  if (chessGame.state.turn === 'wht') {
    // debugger
    switch (sPieceId) {
      case 'empty':
        if (!chessGame.state.current) return
        const previous = chessGame.state.current.id.split(',')
        const pVector = { x: Number(previous[0]), y: Number(previous[1]) }

        // move piece to new spot on the board
        // TODO: validate before moving
        chessGame.setPiece(vector, chessGame.state.current.children[0], pVector)
        return
      case 'wht':
        // debugger
        chessGame.state.current = chessGame.space
        chessGame.setSpace(vector)
        return
      case 'blk':
        // console.log(select1.children[0])
        debugger
        // chessGame.setSpace(vector)
        return
      default:
        break
    }
  }
  if (chessGame.state.turn === 'blk') {
    // debugger
    switch (sPieceId) {
      case 'empty':
        if (!chessGame.state.current) return
        const previous = chessGame.state.current.id.split(',')
        const pVector = { x: Number(previous[0]), y: Number(previous[1]) }
        
        // move piece to new spot on the board
        // TODO: validate before moving
        chessGame.setPiece(vector, chessGame.state.current.children[0], pVector)
        return
      case 'blk':
        // debugger
        chessGame.state.current = chessGame.space
        chessGame.setSpace(vector)
        return
      case 'wht':
        // console.log(select1.children[0])
        debugger
        // chessGame.setSpace(vector)
        return
      default:
        break
    }
  }
}

export default gameLogic
