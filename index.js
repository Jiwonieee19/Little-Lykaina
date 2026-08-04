import { CANVAS, FPS, SPEED, TILE } from './config/constants.js';
import { isDown } from './controllers/input.js';
import { Map } from './models/map.js';
import { Player } from './models/player.js';
import { Camera } from './services/camera.js';
import { render } from './views/render.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = CANVAS.width;
canvas.height = CANVAS.height;

const map = new Map();
const player = new Player(map, TILE, TILE);
const camera = new Camera();

let lastTime = performance.now();
const frameTime = 1000 / FPS;

function loop(time) {
  const delta = time - lastTime;

  if (delta >= frameTime) {
    lastTime = time;

    let dx = 0;
    let dy = 0;
    if (isDown('moveLeft')) dx -= SPEED;
    if (isDown('moveRight')) dx += SPEED;
    if (isDown('moveUp')) dy -= SPEED;
    if (isDown('moveDown')) dy += SPEED;

    player.move(dx, dy);
    camera.follow(player);

    render(ctx, map, camera, player);
  }

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
