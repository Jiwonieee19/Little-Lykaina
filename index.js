import { CANVAS, FPS, PALETTE } from './config/constants.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = CANVAS.width;
canvas.height = CANVAS.height;

let lastTime = performance.now(); // get the now time first
const frameTime = 1000 / FPS;

function loop(time) {
  const delta = time - lastTime; 
  // minus the now time (lasttime) to the current now (time)

  if (delta >= frameTime) { // mo draw ra if delta ky within the frametime
    lastTime = time;

    ctx.fillStyle = PALETTE.canvas;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

// THE WHOLE THING LOOP IS TELLING THE BROWSER TO PRINT ONLY IF ITS ACTUALLY
// PASSED THE FPS, MEANS PER FRAMETIME RA MAGDRAW PRA SAKTO 60DRAWS IN 1S
