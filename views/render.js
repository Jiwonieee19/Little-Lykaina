import { TILE, PALETTE, TILES, CANVAS } from '../config/constants.js';

export function render(ctx, map, camera, player) {
  ctx.fillStyle = PALETTE.canvas;
  ctx.fillRect(0, 0, CANVAS.width, CANVAS.height);

  const startCol = Math.max(0, Math.floor(camera.x / TILE));
  const endCol = Math.min(map.grid.length, Math.ceil((camera.x + CANVAS.width) / TILE) + 1);
  const startRow = Math.max(0, Math.floor(camera.y / TILE));
  const endRow = Math.min(map.grid[0].length, Math.ceil((camera.y + CANVAS.height) / TILE) + 1);

  for (let col = startCol; col < endCol; col++) {
    for (let row = startRow; row < endRow; row++) {
      const tile = map.getTile(col, row);
      if (tile === TILES.EMPTY) continue;

      const screen = camera.worldToScreen(col * TILE, row * TILE);
      ctx.fillStyle = PALETTE.wall;
      ctx.fillRect(screen.x, screen.y, TILE, TILE);
    }
  }

  const playerScreen = camera.worldToScreen(player.x, player.y);
  ctx.fillStyle = PALETTE.accent;
  ctx.fillRect(playerScreen.x, playerScreen.y, player.size, player.size);
}
