function handleResponseFromAPI(promise) {
  console.log('Got a response from the API');
  return promise.then(() => ({
    status: 200,
    body: 'success',
  })).catch((e) => {
    Error(e);
  });
}

export default handleResponseFromAPI;
