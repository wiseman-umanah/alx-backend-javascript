/* eslint-disable no-unused-vars */
import { uploadPhoto, createUser } from './util';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photo, user] = results;
      console.log(photo.body, user.firstName, user.lastName);
      return { photo, user };
    })
    .catch((error) => {
      console.error('Signup system offline', error);
    });
}

export default handleProfileSignup;
