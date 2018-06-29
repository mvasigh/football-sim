const GameCoach = require('./GameCoach');
const Game = require('./Game');

const down = 4,
  toGain = 9,
  distance = 34,
  time = 900;

const coach = new GameCoach();
console.log(coach.callPlay(down, toGain, distance, time));
