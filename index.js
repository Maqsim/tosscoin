#!/usr/bin/env node

const player = require('play-sound')();
const { randomBytes } = require('crypto');

// Play FX sound
player.play(`${__dirname}/fx.wav`);

console.log('tossing a coin...');

setTimeout(() => {
  // Print result
  console.log((randomBytes(1)[0] & 1) === 1 ? 'HEADS' : 'TAILS');

  // Force exit process
  process.exit(0);
}, 300);
