import { CANVAS, WORLD, TILE } from '../config/constants.js';

export class Camera {
  constructor() {
    this.x = 0;
    this.y = 0;
  }

  follow(target) {
    const halfW = CANVAS.width / 2;
    const halfH = CANVAS.height / 2;

    this.x = target.x + target.size / 2 - halfW;
    this.y = target.y + target.size / 2 - halfH;
    // half canva pra naa sa tunga ang camera view

    const maxX = WORLD.cols * TILE - CANVAS.width;
    const maxY = WORLD.rows * TILE - CANVAS.height;
    // max x is ang left side plus ang width pra dli malapas sa map and cam

    this.x = Math.max(0, Math.min(this.x, maxX));
    this.y = Math.max(0, Math.min(this.y, maxY));
    // Clamp Function, useful in games, added concept just like the collision
    // this makes the value(camera coor) never below 0, but never higher the max
  }

  worldToScreen(worldX, worldY) {
    return {
      x: worldX - this.x,
      y: worldY - this.y,
      // okey this points the cam coor (topleft side) in the position its supposed
      // e.g. worldX(300) - this.x[x of the camera in grid](200) = value
      // it can have NEGATIVE VALUEBUT render.js will handle those
    };
  }
}
