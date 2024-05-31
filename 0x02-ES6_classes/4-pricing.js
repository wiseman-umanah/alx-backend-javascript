/* eslint-disable no-underscore-dangle */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (!(Number.isInteger(amount))) throw TypeError('Amount must be a number');
    if (!(currency instanceof Currency)) throw TypeError('currency must be an instance of Currency');
    this._amount = amount;
    this._currency = currency;
  }

  get amount() { return this._amount; }

  get currency() { return this._currency; }

  set amount(value) {
    if (!(Number.isInteger(value))) throw TypeError('Amount must be a number');
    this._amount = value;
  }

  set currency(value) {
    if (!(value instanceof Currency)) throw TypeError('currency must be an instance of Currency');
    this._currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${(this.currency).displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
