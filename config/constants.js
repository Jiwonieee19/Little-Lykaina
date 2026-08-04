export const CANVAS = {
  width: 512,
  height: 512,
};

export const TILE = 16;

export const VIEWPORT = {
  cols: CANVAS.width / TILE,
  rows: CANVAS.height / TILE,
};

export const WORLD = {
  cols: 64, // means 64 by 64 ang world/map pero 16 by 16 and camview (w/tile)
  rows: 64,
};

export const TILES = {
  EMPTY: 0,
  WALL: 1,
};

export const FPS = 60;

export const SPEED = 3;

export const CONTROLS = {
  // key : value
  ArrowUp: 'moveUp',
  ArrowDown: 'moveDown',
  ArrowLeft: 'moveLeft',
  ArrowRight: 'moveRight',
  ' ': 'shoot',
};

export const SCENES = {
  MENU: 'menu',
  GAME: 'game',
  GAME_OVER: 'gameOver',
};

export const PALETTE = {
  background: '#111',
  canvas: '#222',
  accent: 'aqua',
  wall: '#555',
};
