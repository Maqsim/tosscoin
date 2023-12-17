#!/usr/bin/env node

import { exec } from 'child_process';
import { randomBytes } from 'crypto';

// Play audio effect (MacOS only)
exec('afplay fx.wav');

console.log('tossing a coin...');

setTimeout(() => {
  // Print result
  console.log((randomBytes(1)[0] & 1) === 1 ? 'HEADS' : 'TAILS');

  // Force exit process
  process.exit(0);
}, 300);
