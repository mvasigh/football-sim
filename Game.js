const GameCoach = require('./GameCoach');
// Needs to:
//  - Create new game with teams A and B
//  - Keep track of Game state: quarter, clock, score, if ended
//  - nextPlay(): run the next play
//  - calculate play yardage using binomial distribution

const down = 4,
  toGain = 9,
  distance = 34,
  time = 900;

class Game {
  constructor(homeTm, awayTm, options) {
    this.homeTm = homeTm;
    this.awayTm = awayTm;
    this.options = options;
    this.state = {
      clock: 900,
      quarter: 1,
      score: {
        home: 0,
        away: 0
      },
      ended: false,
      down: 1,
      toGain: 10,
      distance: 80
    };
  }
}

const coach = new GameCoach();
console.log(coach.callPlay(down, toGain, distance, time));
