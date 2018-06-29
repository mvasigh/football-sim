class GameCoach {
  callPlay(down, toGain, distance, time) {
    if (down === 4) {
      return distance > 35 ? 'punt' : 'kick';
    } else {
      return this.evaluateRunPass(down, toGain);
    }
  }

  evaluateRunPass(down, toGain) {
    const multiplier = down === 1 ? 2 : 1;
    return Math.random() * multiplier > toGain / 10 ? 'run' : 'pass';
  }
}

module.exports = GameCoach;
