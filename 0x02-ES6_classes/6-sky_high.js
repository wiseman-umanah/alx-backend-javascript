/* eslint-disable no-underscore-dangle */
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (!(Number.isInteger(floors))) throw TypeError('Floors must be a number');
    this._floors = floors;
  }

  get floors() { return this._floors; }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
