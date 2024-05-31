/* eslint-disable no-underscore-dangle */
export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') throw TypeError('code must be a string');
    if (typeof name !== 'string') throw TypeError('name must be a string');
    this._code = code;
    this._name = name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(x) {
    if (typeof x !== 'string') throw TypeError('code must be a string');
    this._code = x;
  }

  set name(x) {
    if (typeof x !== 'string') throw TypeError('name must be a string');
    this._name = x;
  }
}
