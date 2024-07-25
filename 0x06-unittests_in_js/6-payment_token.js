module.exports = function getPaymentTokenFromAPI (success) {
  if (typeof (success) === 'boolean') {
    if (success) {
      const promise = new Promise((res, rej) => {
        res({ data: 'Successful response from the API' });
      });
      return promise;
    } else {
      return Promise.resolve();
    }
  }
};
