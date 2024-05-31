/* eslint-disable guard-for-in */
import ClassRoom from './0-classroom';

function initializeRooms() {
  const items = [19, 20, 34];
  const classes = [];

  for (const i in items) {
    classes.push(new ClassRoom(items[i]));
  }

  return classes;
}

export default initializeRooms;
