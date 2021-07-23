class Statistics {
  constructor() {
    this.gameResults = [{
      win: true,
      bid: 2
    }, {
      win: false,
      bid: -10
    }]

  }

  addGameToStatistics(win, bid) {
    let gameResult = {
      // win: win,
      // bid: bid
      win,
      bid
    }
    console.log(gameResult)
    this.gameResults.push(gameResult)
  }

  showGameStatistics() {
    let games = this.gameResults.length
    let wins = this.gameResults.filter((result) => result.win).length
    let loses = this.gameResults.filter(result => !result.win).length
    return [games, wins, loses]
  }



}

const stats = new Statistics()