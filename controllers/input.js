import { CONTROLS } from '../config/constants.js';

const pressed = new Set(); // hashset

window.addEventListener('keydown', (e) => {
  if (CONTROLS[e.key]) e.preventDefault();
  // if ang key kay naa sa game (config), prevent default reaction of the browser
  // e.g. if arrowdown, doesnt scroll down the web
  pressed.add(e.key);
});

window.addEventListener('keyup', (e) => {
  pressed.delete(e.key);
});

export function isDown(action) {
  for (const [key, mappedAction] of Object.entries(CONTROLS)) {
    if (mappedAction === action && pressed.has(key)) return true;
  }
  return false;
}
