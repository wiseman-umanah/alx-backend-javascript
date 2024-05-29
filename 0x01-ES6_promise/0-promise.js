function getResponseFromAPI() {
  const promise = new Promise(((resolve, reject) => {
    // eslint-disable-next-line no-constant-condition
    if (true) {
      resolve();
    } else {
      reject();
    }
  }));
  return promise;
}

export default getResponseFromAPI;
