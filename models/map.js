import { TILES, WORLD, TILE } from '../config/constants.js';

export class Map {
  constructor() {
    this.grid = this.generate();
  }

  generate() {
    const grid = [];
    for (let col = 0; col < WORLD.cols; col++) {
      grid[col] = [];
      for (let row = 0; row < WORLD.rows; row++) {
        const isBorder =
          col === 0 || row === 0 || col === WORLD.cols - 1 || row === WORLD.rows - 1;
        grid[col][row] = isBorder ? TILES.WALL : TILES.EMPTY;
      }
    }
    return grid;
  }

  inBounds(col, row) {
    return col >= 0 && col < WORLD.cols && row >= 0 && row < WORLD.rows;
  }

  getTile(col, row) {
    if (!this.inBounds(col, row)) return TILES.WALL;
    return this.grid[col][row];
  }

  isSolid(col, row) {
    return this.getTile(col, row) === TILES.WALL;
  }

  worldToTile(x, y) {
    return {
      col: Math.floor(x / TILE),
      row: Math.floor(y / TILE),
    };
  }
}
