/* eslint-disable no-underscore-dangle */
export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get code() { return this._code; }

  get name() { return this._name; }

  get [Symbol.toStringTag]() {
    return this.code;
  }
}
