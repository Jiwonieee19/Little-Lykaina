import { TILE } from '../config/constants.js';

export class Player {
  constructor(map, startX, startY) {
    this.map = map;
    this.size = TILE;
    this.x = startX;
    this.y = startY;
  }

  collides(newX, newY) {
    const { size } = this;
    const corners = [
      { x: newX, y: newY },
      { x: newX + size - 1, y: newY },
      { x: newX, y: newY + size - 1 },
      { x: newX + size - 1, y: newY + size - 1 },
    ];
    return corners.some((c) => {
      const { col, row } = this.map.worldToTile(c.x, c.y);
      return this.map.isSolid(col, row);
    });
  }

  move(dx, dy) {
    const nx = this.x + dx;
    const ny = this.y + dy;

    if (!this.collides(nx, this.y)) this.x = nx;
    if (!this.collides(this.x, ny)) this.y = ny;
  }
}
