// TODO: add a timer to track how long it takes per turn
// TODO: allow user to set amount of time per turn
// TODO: show count down in header

// import moves from './moves'

class ChessGame {
  constructor () {
    this.state = {
      started: false,
      top: 'blk',
      bottom: 'wht',
      turn: 'wht',
      current: null
      // whiteTime: null,
      // blackTime: null
    }
    this.board = null
    this.pSpace = null
    this.space = null
    this.moves = null
    this.timer = null
    this.turnDom = document.querySelector('.chess__header--turn')
    this.countDownDom = document.getElementById('count-down')
  }

  setPiece (vector, piece) {
    this.board.forEach((row, x) => {
      row.forEach((space, y) => {
        if (vector.x === x && vector.y === y) {
          // remove empty div
          this.board[x][y].children[0].parentNode.removeChild(this.board[x][y].children[0])
          this.board[x][y].appendChild(piece)

          // replace moved piece with an empty space
          const empty = document.createElement('div')
          empty.classList.add('chess-piece')
          empty.setAttribute('id', 'empty')
          this.board[this.pSpace.x][this.pSpace.y].appendChild(empty)

          // change turn
          this.state.turn = this.state.turn === 'wht' ? 'blk' : 'wht'
          if (this.state.turn === 'wht') {
            this.turnDom.innerText = 'White\'s turn'
          } else {
            this.turnDom.innerText = 'Black\'s turn'
          }
          // reset move/turn values
          this.pSpace = null
          this.space = null
        }
      })
    })
  }

  setSpace (vector) {
    this.board.forEach((row, x) => {
      row.forEach((space, y) => {
        // clear slection
        this.board[x][y].classList.remove('board__selected-blk')
        this.board[x][y].classList.remove('board__selected-wht')
        if (vector.x === x && vector.y === y) {
          // high light selected space
          if (this.board[x][y].className.includes('black')) {
            this.board[x][y].classList.add('board__selected-blk')
          } else {
            this.board[x][y].classList.add('board__selected-wht')
          }
          this.space = this.board[x][y]
        }
      })
    })
  }

  initPiece (vector, piece) {
    this.board.forEach((row, x) => {
      row.forEach((space, y) => {
        if (vector.x === x && vector.y === y) {
          // remove empty div
          this.board[x][y].children[0].parentNode.removeChild(this.board[x][y].children[0])
          this.board[x][y].appendChild(piece)
        }
      })
    })
  }

  // set time (time) {
  //   // debugger
  //   // clearInterval(this.startTimer('00:00:00'))
  //   if (this.state.turn === 'wht') {
  //     this.state.whiteTime = time
  //   } else {
  //     this.state.blackTime = time
  //   }
  // }

  // get time () {
  //   // const time = this.countDownDom.innerHTML
  //   if (this.state.turn === 'wht') {
  //     return this.state.whiteTime
  //   } else {
  //     return this.state.blackTime
  //   }
  // }

  // timer () {
  //   console.log('test')
  // }

  startTimer (time) {
    // console.log('startGame', time)
    // const countDown = this.countDownDom
    let hours = Number(time[0])
    let minutes = Number(time[1])
    let seconds = Number(time[2])
    const startDate = new Date()
    const epochMillisec = (new Date()).getTime()
    let sec = 1

    const setTime = () => {
      this.countDownDom.innerHTML = (
        `${hours < 10 ? '0' : ''}${hours}:
         ${minutes < 10 ? '0' : ''}${minutes}:
         ${seconds < 10 ? '0' : ''}${seconds}`
      )
    }

    if (this.timer) clearInterval(this.timer)
    this.timer = setInterval(() => {
      // console.log(sec)
      if (seconds < 60 && sec === 1) {
        seconds = 59
        if (minutes === 0) {
          minutes = 59
          hours === 0 ? hours = 0 : hours -= 1
        } else {
          hours === 0 && minutes === 0 ? minutes = 0 : minutes -= 1
        }
        setTime()
        sec += 1
        return
      }
      if (seconds < 60) {
        seconds -= 1
        setTime()
        if (hours === 0 && minutes === 0 && seconds === 0) {
          // time has run out
          clearInterval(this.timer)
        }
        sec += 1
        if (sec === 61) {
          seconds = 0
          sec = 1
        }
      }
      // test timer with 10 second minutes
      // if (seconds < 10 && sec === 1) {
      //   seconds = 9
      //   if (minutes === 0) {
      //     minutes = 9
      //     if (hours === 0) {
      //       hours = 0
      //     } else {
      //       hours -= 1
      //     }
      //   } else {
      //     if (hours === 0 && minutes === 0) {
      //       minutes = 0
      //     } else {
      //       minutes -= 1
      //     }
      //   }
      //   setTime()
      //   sec += 1
      //   return
      // }
      // if (seconds < 10) {
      //   seconds -= 1
      //   setTime()
      //   if (hours === 0 && minutes === 0 && seconds === 0) {
      //     // time has run out
      //     clearInterval(timer)
      //   }
      //   sec += 1
      //   if (sec === 11) {
      //     seconds = 0
      //     sec = 1
      //   }
      // }
    }, 1000)
  }
}

const chessGame = new ChessGame()

export default chessGame
